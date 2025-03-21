import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los productos
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { restaurant: true }, // Incluir detalles del restaurante
    });
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 });
  }
}

// Crear un producto
export async function POST(req: Request) {
  try {
    const { name, description, price, available, restaurantId } = await req.json();

    if (!name || !price || !restaurantId) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: { name, description, price, available, restaurantId },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear producto" }, { status: 500 });
  }
}

// Actualizar un producto
export async function PUT(req: Request) {
  try {
    const { id, name, description, price, available } = await req.json();

    if (!id || (!name && !description && !price && available === undefined)) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const updateData: any = {};
    if (name) updateData.name = name;
    if (description) updateData.description = description;
    if (price) updateData.price = price;
    if (available !== undefined) updateData.available = available;

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar producto" }, { status: 500 });
  }
}

// Eliminar un producto
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID es obligatorio" }, { status: 400 });
    }

    await prisma.product.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar producto" }, { status: 500 });
  }
}