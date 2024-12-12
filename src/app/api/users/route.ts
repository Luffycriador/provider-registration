import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST: Criar um usuário
export async function POST(request: Request) {
    const { name, email, password } = await request.json();

    try {
        const newUser = await prisma.user.create({
            data: { name, email, password },
        });
        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating user' }, { status: 400 });
    }
}

// GET: Listar todos os usuários
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching users' }, { status: 500 });
    }
}
