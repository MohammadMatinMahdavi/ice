"use client";
import * as Primitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion=Primitive.Root;
export function AccordionItem({className,...props}:React.ComponentProps<typeof Primitive.Item>){return <Primitive.Item className={cn("border-b border-white/10",className)} {...props}/>}
export function AccordionTrigger({className,children,...props}:React.ComponentProps<typeof Primitive.Trigger>){return <Primitive.Header className="flex"><Primitive.Trigger className={cn("group flex flex-1 items-center justify-between py-5 text-right text-sm font-semibold text-slate-100 transition hover:text-sky-200 [&[data-state=open]>svg]:rotate-180",className)} {...props}>{children}<ChevronDown size={17} className="text-sky-300 transition-transform duration-300"/></Primitive.Trigger></Primitive.Header>}
export function AccordionContent({className,children,...props}:React.ComponentProps<typeof Primitive.Content>){return <Primitive.Content className={cn("overflow-hidden text-sm leading-8 text-slate-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",className)} {...props}><div className="pb-5">{children}</div></Primitive.Content>}