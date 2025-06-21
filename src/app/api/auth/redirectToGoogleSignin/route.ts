import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { AuthServerList } from '@/libs/configs/config.serverList';

export async function GET(req: NextRequest) {
    try {
        const backendUrl = AuthServerList.signIn[4] as string;

        // Only forward cookies that are needed (example: session)
        const cookies = req.cookies.get('session')?.value;
        const cookieHeader = cookies ? `session=${cookies}` : '';

        // Make a request to the backend to get the Google OAuth redirect URL
        const response = await axios.get(backendUrl, {
            headers: {
                Cookie: cookieHeader,
            },
            withCredentials: true,
            maxRedirects: 0,
            validateStatus: (status) => status >= 200 && status < 400,
        });

        // Check for Location header in backend response
        const location = response.headers['location'];
        if (location && location.startsWith('https://')) {
            return NextResponse.redirect(location, {
                headers: {
                    // Set Secure and SameSite attributes for cookies if needed
                    'Set-Cookie': 'session=' + (cookies ?? '') + '; Path=/; HttpOnly; Secure; SameSite=Strict',
                },
            });
        }

        // If no Location header, fallback to data (if backend returns URL in body)
        if (response.data && typeof response.data === "string" && response.data.startsWith('https://')) {
            return NextResponse.redirect(response.data, {
                headers: {
                    'Set-Cookie': 'session=' + (cookies ?? '') + '; Path=/; HttpOnly; Secure; SameSite=Strict',
                },
            });
        }

        if (response.data.redirectUrl && response.data.redirectUrl.startsWith('https://')) {
            return NextResponse.redirect(response.data.redirectUrl, {
                headers: {
                    'Set-Cookie': 'session=' + (cookies ?? '') + '; Path=/; HttpOnly; Secure; SameSite=Strict',
                },
            });
        }

        return NextResponse.json({ error: "No secure redirect location found." }, { status: 500 });

    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to redirect.' }, { status: 500 });
    }
}