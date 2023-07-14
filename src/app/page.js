'use client'
import { getServerSession } from 'next-auth'
import {getSession,useSession} from 'next-auth/react';
import Hero from './components/Hero';

export default function Home({
}) {
 
  return (
    <>
      <Hero/>
    </>
  );
}