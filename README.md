# MedBrain API

Personal medical knowledge archive & literature digest API built with **NestJS** + **Prisma** + **PostgreSQL**.

A private second-brain backend for storing, searching, and organizing medical papers, notes, case studies, and insights.  
Automatically fetches recent abstracts from PubMed, lets you annotate/rate them, and builds your personal medical knowledge graph over time.

**Current date in project context**: January 2026  
**Tech stack**: NestJS (TypeScript), Prisma ORM, PostgreSQL, JWT (auth later)

## Features (MVP)

- CRUD for knowledge entries (papers, notes, summaries)
- Full-text search + tags
- Automatic PubMed literature fetching & ingestion
- Read status, ratings, and simple analytics
- Bi-directional linking between entries (backlinks)
- Planned: Authentication, weekly digests, exports

## Tech Stack

- **Backend**: NestJS (v10+) with TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Validation**: class-validator + class-transformer
- **API Docs**: Swagger (auto-generated)
- **Future**: Redis caching, JWT auth, email digests

## Prerequisites

- Node.js ≥ 18
- PostgreSQL (local or cloud)
- npm or yarn


   git clone https://github.com/yourusername/medbrain-api.git
   cd medbrain-api# medbrain-api
