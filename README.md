# Storage App - File Upload & Management System

A modern, secure file storage application built with Next.js, featuring UploadThing integration and Neon PostgreSQL database.

## 🚀 Features

- **Secure File Uploads**: Powered by UploadThing for reliable file storage
- **Database Integration**: Neon PostgreSQL with Prisma ORM
- **User Authentication**: Clerk integration for secure user management
- **Modern UI**: Beautiful, responsive interface with Tailwind CSS
- **Performance Monitoring**: Vercel Speed Insights integration
- **File Management**: Upload, view, and manage files with ease

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Neon PostgreSQL
- **ORM**: Prisma
- **File Storage**: UploadThing
- **Authentication**: Clerk
- **Deployment**: Vercel
- **Performance**: Vercel Speed Insights

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Neon PostgreSQL database
- UploadThing account
- Clerk account (optional)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Clayton80024/storage-app.git
cd storage-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Update `.env.local` with your actual credentials:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# UploadThing Configuration
UPLOADTHING_SECRET=your-uploadthing-secret-key
UPLOADTHING_APP_ID=your-uploadthing-app-id

# Clerk Authentication (optional)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

### 4. Database Setup

Generate Prisma client and push schema to database:

```bash
npm run db:generate
npm run db:push
```

### 5. Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## 📁 Project Structure

```
storage-app/
├── app/
│   ├── api/
│   │   ├── files/          # File management API
│   │   └── uploadthing/     # UploadThing API integration
│   ├── components/
│   │   ├── FileUpload.tsx   # File upload component
│   │   ├── FileList.tsx     # File list display
│   │   └── ...              # Other components
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── prisma.ts           # Database client
│   ├── uploadthing.ts       # UploadThing configuration
│   └── db-config.ts        # Database configuration
├── prisma/
│   └── schema.prisma       # Database schema
└── public/                 # Static assets
```

## 🗄️ Database Schema

### User Model
- `id`: Unique identifier
- `clerkId`: Clerk user ID
- `email`: User email
- `name`: User display name
- `createdAt`: Account creation date
- `updatedAt`: Last update date

### File Model
- `id`: Unique identifier
- `name`: File name
- `size`: File size in bytes
- `type`: MIME type
- `url`: UploadThing file URL
- `uploadthingId`: UploadThing file ID
- `key`: UploadThing file key
- `uploadedAt`: Upload timestamp
- `userId`: Associated user ID

## 🔌 API Endpoints

### `/api/uploadthing`
- **POST**: Handle file uploads via UploadThing
- **GET**: UploadThing configuration

### `/api/files`
- **GET**: Fetch user's uploaded files

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `UPLOADTHING_SECRET`
   - `UPLOADTHING_APP_ID`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

3. Deploy automatically on push to main branch

### Environment Variables for Production

Ensure these are set in your deployment platform:

```env
DATABASE_URL=your-neon-database-url
UPLOADTHING_SECRET=your-uploadthing-secret
UPLOADTHING_APP_ID=your-uploadthing-app-id
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

## 🔒 Security Features

- Environment variables properly secured
- Database credentials not committed to repository
- UploadThing handles secure file storage
- Clerk provides authentication security
- Prisma ORM prevents SQL injection

## 📊 Performance Features

- Vercel Speed Insights integration
- Optimized Next.js build
- Efficient database queries with Prisma
- CDN-powered file delivery via UploadThing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/Clayton80024/storage-app/issues) page
2. Create a new issue with detailed information
3. Ensure all environment variables are properly configured

## 🔗 Links

- [UploadThing Documentation](https://uploadthing.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [Neon Documentation](https://neon.tech/docs)