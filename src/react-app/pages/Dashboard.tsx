
// Manifesto: Dashboard
// - Modular: DashboardSidebar, DashboardHeaderActions, DashboardSkeleton, módulos de cada aba
// - Skeleton: loading states em cada módulo
// - Hooks: useState, useEffect, useMemo, custom handleExport, handleConfigUpdate
// - Router: react-router-dom
// - Mobile-first, acessível, tokenização CSS
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '@hey-boss/users-service/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import DashboardSidebar from '../components/Dashboard/DashboardSidebar';
import DashboardHeaderActions from '../components/Dashboard/DashboardHeaderActions';
import DashboardSkeleton from '../components/Dashboard/DashboardSkeleton';
import { lazy, Suspense } from 'react';
const OverviewModule = lazy(() => import('../components/Dashboard/OverviewModule'));
const CRMModule = lazy(() => import('../components/Dashboard/CRMModule'));
const ProcessosModule = lazy(() => import('../components/Dashboard/ProcessosModule'));
const FaturasModule = lazy(() => import('../components/Dashboard/FaturasModule'));
const TicketsModule = lazy(() => import('../components/Dashboard/TicketsModule'));
const PublicacoesModule = lazy(() => import('../components/Publicacoes/PublicacoesModule'));
const BlogManagementModule = lazy(() => import('../components/BlogManagement/BlogManagementModule'));
const ChatbotConfigModule = lazy(() => import('../components/ChatbotConfigModule'));
const BalcaoVirtualModule = lazy(() => import('../components/BalcaoVirtual/BalcaoVirtualModule'));

