# Expense Tracker Project - Comprehensive Architecture & Functionality Documentation

## 1. Project Structure Across Directories and Files

### Directory Organization

```
Expense Tracker/
├── src/                          # Main source code directory
│   ├── components/               # React components
│   │   ├── ui/                   # shadcn/ui reusable components (60+ components)
│   │   ├── Dashboard.tsx         # Main dashboard stats display
│   │   ├── Sidebar.tsx           # Navigation sidebar
│   │   ├── TransactionForm.tsx   # Form for adding transactions
│   │   ├── RecentTransactions.tsx # Transaction list display
│   │   ├── SpendingChart.tsx     # Monthly spending visualization
│   │   ├── BudgetProgress.tsx    # Budget tracking component
│   │   └── InvestmentPortfolio.tsx # Investment pie chart
│   ├── pages/                    # Page-level components
│   │   ├── Index.tsx             # Main authenticated page
│   │   ├── Auth.tsx              # Login/Signup page
│   │   └── NotFound.tsx          # 404 page
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.tsx           # Authentication state management
│   │   └── use-toast.ts          # Toast notification hook
│   ├── integrations/             # External service integrations
│   │   └── supabase/             # Supabase database client
│   │       ├── client.ts         # Supabase client configuration
│   │       └── types.ts          # TypeScript database types
│   ├── lib/                      # Utility libraries
│   │   ├── utils.ts              # General utilities
│   │   └── exportTransactions.ts # PDF/Excel export functions
│   ├── App.tsx                   # Root app component with routing
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles
├── supabase/                     # Database configuration
│   ├── migrations/               # SQL migration files
│   └── config.toml               # Supabase local config
├── public/                       # Static assets
├── dist/                         # Production build output
├── node_modules/                 # Dependencies
├── package.json                  # Project dependencies and scripts
├── vite.config.ts                # Vite build configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

### File Organization Philosophy

- **Feature-based**: Components are grouped by functionality (dashboard, transactions, charts)
- **Separation of concerns**: Pages handle routing, components handle UI, hooks manage state
- **Shared UI components**: shadcn/ui provides a consistent design system
- **Type safety**: TypeScript types are automatically generated from Supabase schema

---

## 2. Key Components and Their Roles

### **Core Application Components**

#### `App.tsx` (Root Component)
- **Role**: Sets up the application's provider layer and routing structure
- **Key Features**:
  - Wraps app in React Query provider for server state management
  - Configures React Router for client-side navigation
  - Provides global toast notification system
  - Defines routes: `/` (dashboard), `/auth` (login), `*` (404)

#### `main.tsx` (Entry Point)
- **Role**: Application initialization
- **Function**: Mounts the React app to the DOM root element

### **Page Components**

#### `pages/Index.tsx` (Main Dashboard Page)
- **Role**: Primary authenticated interface containing all main features
- **Responsibilities**:
  - Authentication guard (redirects to `/auth` if not logged in)
  - Transaction CRUD operations (Create, Read, Delete)
  - Tab-based view management (Dashboard, Transactions, Investments, Analytics, Settings)
  - Month-based filtering for transactions
  - Export functionality (PDF/Excel)
  - Mobile-responsive navigation menu
- **State Management**:
  - `transactions`: Array of all user transactions
  - `activeTab`: Currently selected view tab
  - `isFormOpen`: Controls transaction form modal visibility
  - `selectedMonth`: Filter criteria for transactions

#### `pages/Auth.tsx` (Authentication Page)
- **Role**: Handles user authentication (login and registration)
- **Features**:
  - Tabbed interface for switching between Login and Signup
  - Email/password authentication via Supabase
  - Automatic redirect to dashboard on successful authentication
  - Session persistence check on mount

### **Feature Components**

#### `components/Dashboard.tsx`
- **Role**: Displays financial overview statistics cards
- **Calculations**:
  - **Total Balance**: Income - Expenses
  - **Monthly Expenses**: Sum of all expense transactions
  - **Investments**: Sum of all investment transactions
  - **Savings**: 30% of total balance (estimated)
- **UI**: Four-card grid layout with icons and gradient styling

#### `components/TransactionForm.tsx`
- **Role**: Modal form for adding new transactions
- **Features**:
  - Three transaction types: Expense, Income, Investment
  - Dynamic category lists based on transaction type
  - Custom category/payment method support ("Other" option)
  - Form validation with toast notifications
  - Date picker with default to today
  - Transforms data before submission to match database schema

#### `components/RecentTransactions.tsx`
- **Role**: Displays list of transactions with details
- **Features**:
  - Color-coded by type (expense=red, income=green, investment=blue)
  - Category-specific icons for visual recognition
  - Smart date formatting (Today/Yesterday/Actual Date)
  - Delete functionality for individual transactions
  - Pagination option (`showAll` prop for full list vs. recent 5)

#### `components/SpendingChart.tsx`
- **Role**: Visualizes monthly spending trends
- **Technology**: Recharts library for charts
- **Features**:
  - Bar chart grouping expenses and investments by month
  - Last 6 months of data displayed
  - Responsive design with proper sizing

#### `components/BudgetProgress.tsx`
- **Role**: Tracks spending against predefined category budgets
- **Features**:
  - Predefined category budgets (Food & Dining: $600, Shopping: $1000, etc.)
  - Progress bars showing spending vs. budget
  - Warning indicators when approaching 80% of budget
  - Remaining balance display

#### `components/InvestmentPortfolio.tsx`
- **Role**: Visualizes investment distribution
- **Technology**: Recharts Pie Chart
- **Features**:
  - Pie chart breakdown by investment category
  - Percentage distribution display
  - Portfolio value summary cards

#### `components/Sidebar.tsx`
- **Role**: Navigation menu and primary actions
- **Features**:
  - Menu items for different views (Dashboard, Transactions, Investments, Analytics, Settings)
  - Prominent "Add Transaction" button
  - Active state highlighting for current tab
  - Logout functionality
  - Mobile-responsive collapsible design

### **Custom Hooks**

#### `hooks/useAuth.tsx`
- **Role**: Manages authentication state throughout the application
- **Returns**:
  - `user`: Current authenticated user object
  - `session`: Active Supabase session
  - `loading`: Loading state during auth checks
  - `signOut`: Function to log out the user
- **Features**:
  - Listens to Supabase auth state changes
  - Persists session across page refreshes

---

## 3. Flow of Data and Interactions Between Components

### **Authentication Flow**

```
1. User visits app → App.tsx checks routes
2. Unauthenticated → Redirect to /auth (Auth.tsx)
3. User submits credentials → Supabase.auth.signInWithPassword()
4. Success → Supabase creates session → useAuth hook detects change
5. useAuth updates user state → Index.tsx detects user → Loads transactions
6. Authenticated → Dashboard renders with user data
```

### **Transaction CRUD Flow**

#### **Create Transaction:**
```
User clicks "Add Transaction" → TransactionForm opens
User fills form → Submits → handleAddTransaction() in Index.tsx
→ Transforms data (camelCase → snake_case) → Supabase insert
→ Success → Updates local state → Toast notification → Form closes
```

#### **Read Transactions:**
```
Index.tsx mounts → useEffect detects user → fetchTransactions()
→ Supabase query with RLS (Row Level Security) filters by user_id
→ Transforms snake_case → camelCase → Updates transactions state
→ All components receive filtered transactions via props
```

#### **Update Transaction:**
*(Currently not implemented in UI, but supported by database)*

#### **Delete Transaction:**
```
User clicks delete → handleDeleteTransaction(id) → Supabase delete
→ Success → Filters transaction from local state → Toast notification
```

### **State Management Architecture**

```
┌─────────────────┐
│   Supabase DB   │ ← Row Level Security (RLS) ensures user isolation
└────────┬────────┘
         │
         ↓ (fetch/update)
┌─────────────────┐
│   Index.tsx     │ ← Central state manager
│  (transactions) │
└────────┬────────┘
         │
         ↓ (props)
┌─────────────────┬─────────────────┬─────────────────┐
│   Dashboard     │ RecentTransactions│ SpendingChart  │
│                 │                  │                 │
│   Calculates    │   Displays      │   Visualizes    │
│   Statistics    │   List          │   Trends        │
└─────────────────┴─────────────────┴─────────────────┘
```

### **Data Transformation Layer**

The application handles schema differences between frontend and database:

- **Frontend (camelCase)**: `paymentMethod`, `type: "expense"`
- **Database (snake_case)**: `payment_method`, `type: "expense"`

Transformations occur in:
- `Index.tsx`: `fetchTransactions()` and `handleAddTransaction()`
- Ensures type safety with TypeScript interfaces

---

## 4. Main Features Implemented and Organization

### **Feature Categories**

#### **1. Authentication & User Management**
- Email/password authentication via Supabase
- User registration with profile creation
- Session persistence across page refreshes
- Protected routes (automatic redirect if not authenticated)
- Auto profile creation on signup (database trigger)

#### **2. Transaction Management**
- Add transactions (Expense/Income/Investment types)
- View complete transaction history
- Delete individual transactions
- Month-based filtering for transactions
- Transaction details: amount, category, payment method, date, description
- Custom categories and payment methods

#### **3. Financial Dashboard**
- Real-time balance calculation (Income - Expenses)
- Expense tracking by category
- Investment portfolio tracking
- Savings estimation (30% of balance)
- Visual statistics cards with icons

#### **4. Analytics & Visualization**
- Monthly spending chart (bar chart showing expenses vs. investments)
- Investment distribution (pie chart by category)
- Budget progress tracking (spending vs. budget per category)
- Category-based spending analysis

#### **5. Data Export**
- PDF export using jsPDF with formatted tables
- Excel export using xlsx library
- Summary calculations included in exports
- Date-stamped filenames

#### **6. User Settings**
- Account information display (email)
- Clear all transactions (with confirmation dialog)
- Data management options

### **Feature Organization Pattern**

Features are organized in a **tab-based interface**:

1. **Dashboard Tab**: Overview with stats cards + charts + recent transactions
2. **Transactions Tab**: Full transaction list with filtering and export options
3. **Investments Tab**: Investment-specific portfolio view with pie chart
4. **Analytics Tab**: Combined charts and budget tracking
5. **Settings Tab**: Account and data management

### **Responsive Design**

- Mobile-first approach with breakpoints
- Collapsible sidebar for mobile devices
- Responsive grid layouts (1 column mobile, 2-4 columns desktop)
- Touch-friendly UI elements
- Adaptive text sizes and spacing

---

## 5. Prerequisites, Dependencies, and Installation

### **Prerequisites**

1. **Node.js**: Version 18 or higher (LTS recommended)
   - Install via [nvm](https://github.com/nvm-sh/nvm) or official installer

2. **npm or yarn**: Package manager (included with Node.js)

3. **Supabase Account**: 
   - Create account at [supabase.com](https://supabase.com)
   - Create a new project
   - Get project URL and anon/public key

4. **Git** (optional): For version control

### **Key Dependencies**

#### **Core Framework**
- `react` (^18.3.1): UI library
- `react-dom` (^18.3.1): React DOM rendering
- `react-router-dom` (^6.30.1): Client-side routing

#### **Backend & Database**
- `@supabase/supabase-js` (^2.77.0): Supabase client for authentication and database operations

#### **State Management**
- `@tanstack/react-query` (^5.83.0): Server state management and caching

#### **UI Framework**
- `tailwindcss` (^3.4.17): Utility-first CSS framework
- `tailwindcss-animate` (^1.0.7): Animation utilities
- `next-themes` (^0.3.0): Theme management
- **Radix UI** components: Accessible UI primitives (60+ components from shadcn/ui)

#### **Data Visualization**
- `recharts` (^2.15.4): Chart library (bar charts, pie charts)

#### **Form Management**
- `react-hook-form` (^7.61.1): Form state and validation
- `zod` (^3.25.76): Schema validation
- `@hookform/resolvers` (^3.10.0): Zod integration for react-hook-form

#### **Export Functionality**
- `jspdf` (^3.0.3): PDF generation
- `jspdf-autotable` (^5.0.2): Table support in PDFs
- `xlsx` (^0.18.5): Excel file generation

#### **Utilities**
- `date-fns` (^3.6.0): Date manipulation
- `lucide-react` (^0.462.0): Icon library
- `clsx` (^2.1.1): Conditional className utility
- `tailwind-merge` (^2.6.0): Merge Tailwind classes

#### **Build Tools**
- `vite` (^5.4.19): Fast build tool and dev server
- `@vitejs/plugin-react-swc` (^3.11.0): Fast React refresh
- `typescript` (^5.8.3): Type safety
- `eslint` (^9.32.0): Code linting

### **Environment Variables Required**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### **Database Schema**

The application uses two main tables:

1. **`profiles`**: User profile information
   - Auto-created via database trigger on user signup
   - Linked to `auth.users` via `user_id`
   - Fields: `id`, `user_id`, `full_name`, `email`, `created_at`, `updated_at`

2. **`transactions`**: Financial transactions
   - Fields: `id`, `user_id`, `amount`, `category`, `type`, `payment_method`, `description`, `date`, `created_at`
   - Row Level Security (RLS) ensures users only see their own data
   - Indexed on `user_id`, `date`, and composite `(user_id, date)` for performance

### **Installation Steps**

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Supabase:**
   - Create `.env` file with your Supabase credentials
   - Run migrations in Supabase dashboard (or use Supabase CLI)
   - Migration file: `supabase/migrations/20251029125703_15ae9f27-05db-4b7f-a7e3-c2118dbf7e2b.sql`

3. **Start development server:**
   ```bash
   npm run dev
   ```
   - App runs on `http://localhost:8080` (configured in `vite.config.ts`)

4. **Build for production:**
   ```bash
   npm run build
   ```
   - Outputs optimized bundle to `dist/` directory

5. **Preview production build:**
   ```bash
   npm run preview
   ```

### **Available Scripts**

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build production bundle
- `npm run build:dev`: Build in development mode
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint for code quality
- `npm run deploy`: Build and deploy to GitHub Pages

### **Deployment**

The project includes GitHub Pages deployment configuration:
```bash
npm run deploy
```

This builds the project and deploys the `dist/` folder to the `gh-pages` branch.

---

## **Summary**

This is a comprehensive full-stack expense tracker application built with modern web technologies:

- **Frontend**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL database + Authentication + Row Level Security)
- **Features**: Complete CRUD for transactions, financial analytics, data export, secure authentication
- **Architecture**: Component-based, type-safe, responsive, and scalable

The codebase follows best practices with clear separation of concerns: pages handle routing and state, components handle UI presentation, hooks manage reusable logic, and Supabase handles all backend operations including authentication. This architecture ensures maintainability and scalability as the application grows.
