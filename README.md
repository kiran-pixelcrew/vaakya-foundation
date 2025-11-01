# Vaakya Foundation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- ✅ **Next.js 15** with App Router
- ✅ **Clerk Authentication** - Secure user authentication and management
- ✅ **Admin Role Management** - Role-based access control for content management
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Motion** - Smooth animations

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Set Up Clerk Authentication

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/) and sign up or log in
2. Create a new application
3. Copy your API keys from the Clerk dashboard
4. Create a `.env.local` file in the root directory (use `.env.example` as a template)
5. Add your Clerk keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

**Note:** Clerk will auto-generate development keys if you don't provide them, but it's recommended to use your own keys from the dashboard for full control.

### 3. Run the Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Clerk Authentication

This project uses [Clerk](https://clerk.com/) for authentication with the App Router integration.

### What's Configured

- ✅ **Middleware** (`src/middleware.ts`) - Uses `clerkMiddleware()` to protect routes
- ✅ **Layout** (`src/app/layout.tsx`) - Wrapped with `<ClerkProvider>`
- ✅ **Navbar** - Includes Sign In/Sign Up buttons and User Button
- ✅ **Sign-in Page** (`src/app/app/sign-in/page.tsx`) - Custom sign-in page

### Clerk Components Used

- `<SignInButton>` - Trigger sign-in modal
- `<SignUpButton>` - Trigger sign-up modal
- `<UserButton>` - User profile dropdown
- `<SignedIn>` - Content visible only to authenticated users
- `<SignedOut>` - Content visible only to unauthenticated users

### Testing Authentication

1. Start the dev server
2. Click "Sign Up" in the navbar
3. Create an account using email or OAuth providers (Google, GitHub, etc.)
4. Once signed in, you'll see the `<UserButton>` with your profile
5. Test protected routes by navigating to `/app/sign-in`

## Admin Features

This application includes role-based access control for administrators.

### Setting Up Admin Users

Admins can edit and manage video content on the site. To set up an admin user:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Navigate to **Users**
3. Select the user you want to make an admin
4. In **Public metadata**, add:
   ```json
   {
     "role": "admin"
   }
   ```
5. Save changes

**📖 For detailed admin setup instructions, see [ADMIN_SETUP.md](./ADMIN_SETUP.md)**

### Admin Capabilities

Once a user has the admin role, they can:

- ✏️ **Edit Video**: Change the YouTube video URL displayed on the homepage
- 🗑️ **Delete Video**: Reset to the default video
- 🎥 **Video URL Format Support**: Accepts YouTube URLs in multiple formats
  - Regular: `https://www.youtube.com/watch?v=VIDEO_ID`
  - Short: `https://youtu.be/VIDEO_ID`
  - Embed: `https://www.youtube.com/embed/VIDEO_ID`

### Admin UI Features

- Edit and delete buttons (visible only to admins)
- Inline video URL editor with validation
- Automatic URL format conversion
- Visual admin badge indicator

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
