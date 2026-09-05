import {
  Users,
  Megaphone,
  Palette,
  MessageCircle,
  BarChart3,
  Trophy,
  MapPin,
  Target,
  LineChart,
  Share2,
  PenTool,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Newspaper,
  Radio,
  Lightbulb,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

export const heroFeatures = [
  { icon: Users, label: 'Voter Research' },
  { icon: Megaphone, label: 'Digital Campaigns' },
  { icon: Palette, label: 'Creative Content' },
  { icon: MessageCircle, label: 'WhatsApp & SMS Outreach' },
  { icon: BarChart3, label: 'Ground Support & Analytics' },
]

export const heroStats = [
  { icon: Trophy, value: '50+', label: 'Campaigns' },
  { icon: Users, value: '100+', label: 'Leaders Supported' },
  { icon: MapPin, value: 'All 30', label: 'Districts of Odisha' },
  { icon: Target, value: 'Proven', label: 'Results' },
]

export const aboutPoints = [
  {
    icon: LineChart,
    title: 'Data-Driven Approach',
    description:
      'Booth-level voter data, sentiment tracking and turnout modelling behind every recommendation we make.',
  },
  {
    icon: Target,
    title: 'Political Strategy',
    description:
      'Campaign roadmaps built around Odisha’s constituencies, timelines and the issues voters actually care about.',
  },
  {
    icon: PenTool,
    title: 'Communication & Creative',
    description:
      'Messaging, design and content that stays consistent from a roadside banner to a WhatsApp broadcast.',
  },
]

export const services = [
  {
    icon: LineChart,
    title: 'Voter Research & Analytics',
    description:
      'Constituency mapping, sentiment surveys and turnout modelling that ground strategy in real data.',
  },
  {
    icon: Target,
    title: 'Political Strategy',
    description:
      'End-to-end campaign planning — positioning, messaging pillars, budget and milestone tracking.',
  },
  {
    icon: Megaphone,
    title: 'Digital Campaign Management',
    description:
      'Search, display and social advertising targeted by constituency, demographic and voter intent.',
  },
  {
    icon: Share2,
    title: 'Social Media Campaigns',
    description:
      'Daily content, community management and rapid-response posting across every platform that matters.',
  },
  {
    icon: Palette,
    title: 'Creative & Visual Content',
    description:
      'Posters, banners, video and design assets built for consistency from print to screen.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp & SMS Outreach',
    description:
      'Segmented broadcast campaigns that reach voters directly, tracked and optimised in real time.',
  },
  {
    icon: HeartHandshake,
    title: 'Ground Campaign Support',
    description:
      'Volunteer recruitment, booth-level mobilisation and ground team coordination across districts.',
  },
  {
    icon: BarChart3,
    title: 'Election Data & Analytics',
    description:
      'Live dashboards and sentiment tracking so strategy adapts in real time, not after the fact.',
  },
  {
    icon: ShieldCheck,
    title: 'Branding & Communication',
    description:
      'A consistent leader or party identity across every touchpoint voters encounter.',
  },
]

export const workItems = [
  {
    tag: 'State Assembly Campaign',
    title: 'Constituency-Wide Voter Outreach',
    result: '+18% turnout in targeted booths',
    icon: TrendingUp,
  },
  {
    tag: 'Municipal Corporation Campaign',
    title: 'Digital-First Ward Strategy',
    result: '2.4M+ voters reached digitally',
    icon: Radio,
  },
  {
    tag: 'District-Level Advocacy',
    title: 'Ground & WhatsApp Mobilisation',
    result: '450+ volunteers coordinated',
    icon: HeartHandshake,
  },
]

export const insights = [
  {
    icon: Newspaper,
    tag: 'Campaign Strategy',
    title: 'What Booth-Level Data Changes About Campaign Planning',
    excerpt:
      'Why constituency-wide averages hide the numbers that actually decide close elections.',
  },
  {
    icon: Sparkles,
    tag: 'Digital Political Marketing',
    title: 'WhatsApp Outreach: Odisha’s Highest-Reach Channel',
    excerpt:
      'How segmented broadcast lists outperform mass messaging for voter engagement.',
  },
  {
    icon: Lightbulb,
    tag: 'Election Analysis',
    title: 'Reading Odisha’s 30 Districts as 30 Different Campaigns',
    excerpt:
      'Why a single statewide message fails, and what district-level strategy looks like instead.',
  },
]
