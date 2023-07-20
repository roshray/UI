/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"pbs.twimg.com",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname:"i.ytimg.com",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname:"yt3.ggpht.com",
                pathname: "/**"
            },
        ],
    },
}

module.exports = nextConfig
