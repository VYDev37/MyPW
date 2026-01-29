import { redirect } from 'next/navigation';

export async function GET() {
    const cvLink = process.env.CV_LINK;

    if (!cvLink)
        return new Response("CV Link not found", { status: 404 });

    redirect(cvLink);
}