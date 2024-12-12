import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET: Obter usuário por ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching user' }, { status: 500 });
    }
}

// PUT: Atualizar usuário por ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name, email, password } = await req.json();

    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id) },
            data: { name, email, password },
        });
        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
    }
}

// DELETE: Remover usuário por ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await prisma.user.delete({
            where: { id: parseInt(id) },
        });
        return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting user' }, { status: 500 });
    }
}
