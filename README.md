Readme - Pataku Next
Pataku — Next.js E‑commerce Frontend

Pataku — A clean, minimal, and modern e-commerce frontend built with Next.js + TypeScript, Tailwind CSS, Redux Toolkit, Formik + Yup, and Framer Motion.

Project Overview

Pataku is a frontend-only e-commerce demo app with a focus on

fast UI using Next.js (App Router or Pages Router depending on your preference),

predictable state via Redux Toolkit,

great DX on forms using Formik + Yup,

smooth micro-interactions with Framer Motion,

utility-first styling with Tailwind, and

full TypeScript support.

for payment Razorpay

The project ships with sample navigation, products, a mini-cart, and a header search with suggestions.

Tech Stack

Next.js (13+ — App Router or Pages Router)

TypeScript

Tailwind CSS

Redux Toolkit (with RTK Query optional)

Formik + Yup for forms & validation

Framer Motion for animations

ESLint + Prettier (recommended)


Quick Start

Clone the repo

git clone  pataku
cd pataku

Install dependencies

# using npm
npm install
# or using yarn
yarn

Run dev server

npm run dev
# or
yarn dev

Open http://localhost:3000

Environment Variables

Create a .env.local in the project root (do not commit this file). Typical variables:



RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
NEXT_PUBLIC_RAZORPAY_KEY_ID=""
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=""

The example uses frontend-only features; if you connect to a real backend or payment gateway, add the required keys here.
