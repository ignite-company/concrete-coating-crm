# Concrete Coating Enterprises Command Center

Responsive React/Vite operations dashboard built for Concrete Coating Enterprises. Modules: overview, lead pipeline, estimates, jobs, schedule and follow-ups.

## Preview mode
This initial version uses local browser storage so it can be deployed and tested immediately. **It is not yet a shared multi-user CRM**: data saved on one device will not appear on another. Demo records are clearly marked and can be removed in-app. Do not enter real customer information until shared authentication and a protected database are configured.

## Development
```bash
npm install
npm run dev
npm run build
```

## Go-live checklist
- Provision a dedicated database with row-level permissions
- Add owner and salesperson accounts and real authentication
- Replace browser storage with API or Supabase data access
- Configure backups, roles, and audit trail
- Review access control before importing production customers
