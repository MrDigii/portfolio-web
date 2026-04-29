import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        qualities: [90],
    },
    allowedDevOrigins: ['192.168.178.24'],
};

export default nextConfig;
