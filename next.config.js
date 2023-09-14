/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['res.cloudinary.com','scontent.faep29-1.fna.fbcdn.net', 'scontent.faep29-2.fna.fbcdn.net', 'yt3.googleusercontent.com', 'marcandoelpolo.com']
    }
}

module.exports = nextConfig