import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Obtener todos los restaurantes
export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener restaurantes" }, { status: 500 });
  }
}

// Crear un restaurante
export async function POST(req: Request) {
  try {
    const { name, address } = await req.json();

    if (!name || !address) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    const newRestaurant = await prisma.restaurant.create({
      data: { name, address },
    });

    return NextResponse.json(newRestaurant, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear restaurante" }, { status: 500 });
  }
}

// Actualizar un restaurante
export async function PUT(req: Request) {
    try {
      const { id, name, address } = await req.json();
  
      if (!id || (!name && !address)) {
        return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
      }
  
      const updateData: any = {};
      if (name) updateData.name = name;
      if (address) updateData.address = address;
  
      const updatedRestaurant = await prisma.restaurant.update({
        where: { id },
        data: updateData,
      });
  
      return NextResponse.json(updatedRestaurant);
    } catch (error) {
      return NextResponse.json({ error: "Error al actualizar restaurante" }, { status: 500 });
    }
  }

// Eliminar un restaurante
export async function DELETE(req: Request) {
    try {
      const { id } = await req.json();
  
      if (!id) {
        return NextResponse.json({ error: "ID es obligatorio" }, { status: 400 });
      }
  
      await prisma.restaurant.delete({
        where: { id },
      });
  
      return NextResponse.json({ message: "Restaurante eliminado correctamente" });
    } catch (error) {
      return NextResponse.json({ error: "Error al eliminar restaurante" }, { status: 500 });
    }
  }
  