import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { where } from "firebase/firestore";

const prisma = new PrismaClient();

// Obtener todos los pedidos
export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: { user: true, restaurant: true, orderItems: true }, // Incluir detalles
    });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener pedidos" }, { status: 500 });
  }
}

// Crear un pedido
export async function POST(req: Request) {
  try {
    const { userId, restaurantId, total, items } = await req.json();

    if (!userId || !restaurantId || !total || !items || items.length === 0) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    // Crear el pedido
    const newOrder = await prisma.order.create({
      data: {
        userId,
        restaurantId,
        total,
        orderItems: {
          create: items.map((item: { productId: number; quantity: number; subtotal: number }) => ({
            productId: item.productId,
            quantity: item.quantity,
            subtotal: item.subtotal,
          })),
        },
      },
      include: { orderItems: true },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Error en POST /api/orders:", error);
    return NextResponse.json({ error: "Error al crear pedido" }, { status: 500 });
  }
}

// Actualizar un pedido
export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedOrder);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar pedido" }, { status: 500 });
  }
}

// Eliminar un pedido
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID es obligatorio" }, { status: 400 });
    }

    await prisma.orderItem.deleteMany({
        where: { orderId: id }
    })

    await prisma.order.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    console.error("Error en DELETE /api/orders:", error);
    return NextResponse.json({ error: "Error al eliminar pedido" }, { status: 500 });
  }
}


