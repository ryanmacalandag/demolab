"use client";

import React, { ReactNode } from "react";
import ProjectWrapper from "./ui/ProjectWrapper";
import { CopyCheckIcon, CopyIcon, XIcon } from "lucide-react";
import { toast } from "sonner";

export function ColorBox({
  className,
  children,
  title,
}: {
  className: string;
  children: ReactNode;
  title: string;
}) {
  const handleCopyRGB = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const backgroundColor = window.getComputedStyle(
      e.currentTarget
    )?.backgroundColor;
    navigator.clipboard.writeText(backgroundColor);

    toast.custom((t) => (
      <div className="group/toast relative flex gap-3 items-center border-0 rounded-lg pl-4 pr-10 py-3 text-sm overflow-hidden">
        <div className="opacity-50 group-hover/toast:opacity-100">
          <CopyCheckIcon size={16} />
        </div>
        <p className="font-light">
          <span className="font-semibold text-success">Success!</span> Copied
          <span className="font-semibold">{` ${backgroundColor} `}</span> to the
          clipboard.
        </p>
        <button
          onClick={() => toast.dismiss(t)}
          className="absolute top-2 right-2 opacity-40 hover:opacity-100"
          lang="en"
        >
          <XIcon size={12} />
        </button>
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-success/5"></div>
        <div className="absolute -z-15 top-0 left-0 w-full h-full bg-background"></div>
      </div>
    ));
  };

  return (
    <button
      className={`color-box group/color relative col-span-2 flex flex-col justify-end items-center text-mono text-xxs text-foreground/50 aspect-video lg:aspect-portrait rounded overflow-hidden hover:ring ${className}`}
      title={title}
      onClick={handleCopyRGB}
    >
      <p className="w-full bg-background/90 px-2 py-1 text-nowrap whitespace-nowrap">
        {children}
      </p>
      <span className="absolute top-0 right-0 p-2 bg-foreground opacity-0 text-background group-hover/color:opacity-100 transition">
        <CopyIcon size={16} />
      </span>
    </button>
  );
}

export function ColorChart({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`color-chart w-full h-fit flex flex-col gap-4 mb-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function ColorChartTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3 className={`font-light text-lg md:text-2xl ${className}`}>
      {children}
    </h3>
  );
}

export function ColorGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`olor-chart-neutral grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-22 gap-x-2 gap-y-4 ${className}`}
    >
      {children}
    </div>
  );
}

export default function TailwindColorChart() {
  return (
    <ProjectWrapper className="gap-6 bg-background border">
      <ColorChart>
        <ColorChartTitle>Neutral</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-neutral-50" title="neutral-50">
            neutral-50
          </ColorBox>
          <ColorBox className="bg-neutral-100" title="neutral-100">
            neutral-100
          </ColorBox>
          <ColorBox className="bg-neutral-200" title="neutral-200">
            neutral-200
          </ColorBox>
          <ColorBox className="bg-neutral-300" title="neutral-300">
            neutral-300
          </ColorBox>
          <ColorBox className="bg-neutral-400" title="neutral-400">
            neutral-400
          </ColorBox>
          <ColorBox className="bg-neutral-500" title="neutral-500">
            neutral-500
          </ColorBox>
          <ColorBox className="bg-neutral-600" title="neutral-600">
            neutral-600
          </ColorBox>
          <ColorBox className="bg-neutral-700" title="neutral-700">
            neutral-700
          </ColorBox>
          <ColorBox className="bg-neutral-800" title="neutral-800">
            neutral-800
          </ColorBox>
          <ColorBox className="bg-neutral-900" title="neutral-900">
            neutral-900
          </ColorBox>
          <ColorBox className="bg-neutral-950" title="neutral-950">
            neutral-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Stone</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-stone-50" title="stone-50">
            stone-50
          </ColorBox>
          <ColorBox className="bg-stone-100" title="stone-100">
            stone-100
          </ColorBox>
          <ColorBox className="bg-stone-200" title="stone-200">
            stone-200
          </ColorBox>
          <ColorBox className="bg-stone-300" title="stone-300">
            stone-300
          </ColorBox>
          <ColorBox className="bg-stone-400" title="stone-400">
            stone-400
          </ColorBox>
          <ColorBox className="bg-stone-500" title="stone-500">
            stone-500
          </ColorBox>
          <ColorBox className="bg-stone-600" title="stone-600">
            stone-600
          </ColorBox>
          <ColorBox className="bg-stone-700" title="stone-700">
            stone-700
          </ColorBox>
          <ColorBox className="bg-stone-800" title="stone-800">
            stone-800
          </ColorBox>
          <ColorBox className="bg-stone-900" title="stone-900">
            stone-900
          </ColorBox>
          <ColorBox className="bg-stone-950" title="stone-950">
            stone-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Zinc</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-zinc-50" title="zinc-50">
            zinc-50
          </ColorBox>
          <ColorBox className="bg-zinc-100" title="zinc-100">
            zinc-100
          </ColorBox>
          <ColorBox className="bg-zinc-200" title="zinc-200">
            zinc-200
          </ColorBox>
          <ColorBox className="bg-zinc-300" title="zinc-300">
            zinc-300
          </ColorBox>
          <ColorBox className="bg-zinc-400" title="zinc-400">
            zinc-400
          </ColorBox>
          <ColorBox className="bg-zinc-500" title="zinc-500">
            zinc-500
          </ColorBox>
          <ColorBox className="bg-zinc-600" title="zinc-600">
            zinc-600
          </ColorBox>
          <ColorBox className="bg-zinc-700" title="zinc-700">
            zinc-700
          </ColorBox>
          <ColorBox className="bg-zinc-800" title="zinc-800">
            zinc-800
          </ColorBox>
          <ColorBox className="bg-zinc-900" title="zinc-900">
            zinc-900
          </ColorBox>
          <ColorBox className="bg-zinc-950" title="zinc-950">
            zinc-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Slate</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-slate-50" title="slate-50">
            slate-50
          </ColorBox>
          <ColorBox className="bg-slate-100" title="slate-100">
            slate-100
          </ColorBox>
          <ColorBox className="bg-slate-200" title="slate-200">
            slate-200
          </ColorBox>
          <ColorBox className="bg-slate-300" title="slate-300">
            slate-300
          </ColorBox>
          <ColorBox className="bg-slate-400" title="slate-400">
            slate-400
          </ColorBox>
          <ColorBox className="bg-slate-500" title="slate-500">
            slate-500
          </ColorBox>
          <ColorBox className="bg-slate-600" title="slate-600">
            slate-600
          </ColorBox>
          <ColorBox className="bg-slate-700" title="slate-700">
            slate-700
          </ColorBox>
          <ColorBox className="bg-slate-800" title="slate-800">
            slate-800
          </ColorBox>
          <ColorBox className="bg-slate-900" title="slate-900">
            slate-900
          </ColorBox>
          <ColorBox className="bg-slate-950" title="slate-950">
            slate-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Red</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-gray-50" title="gray-50">
            gray-50
          </ColorBox>
          <ColorBox className="bg-gray-100" title="gray-100">
            gray-100
          </ColorBox>
          <ColorBox className="bg-gray-200" title="gray-200">
            gray-200
          </ColorBox>
          <ColorBox className="bg-gray-300" title="gray-300">
            gray-300
          </ColorBox>
          <ColorBox className="bg-gray-400" title="gray-400">
            gray-400
          </ColorBox>
          <ColorBox className="bg-gray-500" title="gray-500">
            gray-500
          </ColorBox>
          <ColorBox className="bg-gray-600" title="gray-600">
            gray-600
          </ColorBox>
          <ColorBox className="bg-gray-700" title="gray-700">
            gray-700
          </ColorBox>
          <ColorBox className="bg-gray-800" title="gray-800">
            gray-800
          </ColorBox>
          <ColorBox className="bg-gray-900" title="gray-900">
            gray-900
          </ColorBox>
          <ColorBox className="bg-gray-950" title="gray-950">
            gray-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Red</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-red-50" title="red-50">
            red-50
          </ColorBox>
          <ColorBox className="bg-red-100" title="red-100">
            red-100
          </ColorBox>
          <ColorBox className="bg-red-200" title="red-200">
            red-200
          </ColorBox>
          <ColorBox className="bg-red-300" title="red-300">
            red-300
          </ColorBox>
          <ColorBox className="bg-red-400" title="red-400">
            red-400
          </ColorBox>
          <ColorBox className="bg-red-500" title="red-500">
            red-500
          </ColorBox>
          <ColorBox className="bg-red-600" title="red-600">
            red-600
          </ColorBox>
          <ColorBox className="bg-red-700" title="red-700">
            red-700
          </ColorBox>
          <ColorBox className="bg-red-800" title="red-800">
            red-800
          </ColorBox>
          <ColorBox className="bg-red-900" title="red-900">
            red-900
          </ColorBox>
          <ColorBox className="bg-red-950" title="red-950">
            red-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Orange</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-orange-50" title="orange-50">
            orange-50
          </ColorBox>
          <ColorBox className="bg-orange-100" title="orange-100">
            orange-100
          </ColorBox>
          <ColorBox className="bg-orange-200" title="orange-200">
            orange-200
          </ColorBox>
          <ColorBox className="bg-orange-300" title="orange-300">
            orange-300
          </ColorBox>
          <ColorBox className="bg-orange-400" title="orange-400">
            orange-400
          </ColorBox>
          <ColorBox className="bg-orange-500" title="orange-500">
            orange-500
          </ColorBox>
          <ColorBox className="bg-orange-600" title="orange-600">
            orange-600
          </ColorBox>
          <ColorBox className="bg-orange-700" title="orange-700">
            orange-700
          </ColorBox>
          <ColorBox className="bg-orange-800" title="orange-800">
            orange-800
          </ColorBox>
          <ColorBox className="bg-orange-900" title="orange-900">
            orange-900
          </ColorBox>
          <ColorBox className="bg-orange-950" title="orange-950">
            orange-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Amber</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-amber-50" title="amber-50">
            amber-50
          </ColorBox>
          <ColorBox className="bg-amber-100" title="amber-100">
            amber-100
          </ColorBox>
          <ColorBox className="bg-amber-200" title="amber-200">
            amber-200
          </ColorBox>
          <ColorBox className="bg-amber-300" title="amber-300">
            amber-300
          </ColorBox>
          <ColorBox className="bg-amber-400" title="amber-400">
            amber-400
          </ColorBox>
          <ColorBox className="bg-amber-500" title="amber-500">
            amber-500
          </ColorBox>
          <ColorBox className="bg-amber-600" title="amber-600">
            amber-600
          </ColorBox>
          <ColorBox className="bg-amber-700" title="amber-700">
            amber-700
          </ColorBox>
          <ColorBox className="bg-amber-800" title="amber-800">
            amber-800
          </ColorBox>
          <ColorBox className="bg-amber-900" title="amber-900">
            amber-900
          </ColorBox>
          <ColorBox className="bg-amber-950" title="amber-950">
            amber-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Yellow</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-yellow-50" title="yellow-50">
            yellow-50
          </ColorBox>
          <ColorBox className="bg-yellow-100" title="yellow-100">
            yellow-100
          </ColorBox>
          <ColorBox className="bg-yellow-200" title="yellow-200">
            yellow-200
          </ColorBox>
          <ColorBox className="bg-yellow-300" title="yellow-300">
            yellow-300
          </ColorBox>
          <ColorBox className="bg-yellow-400" title="yellow-400">
            yellow-400
          </ColorBox>
          <ColorBox className="bg-yellow-500" title="yellow-500">
            yellow-500
          </ColorBox>
          <ColorBox className="bg-yellow-600" title="yellow-600">
            yellow-600
          </ColorBox>
          <ColorBox className="bg-yellow-700" title="yellow-700">
            yellow-700
          </ColorBox>
          <ColorBox className="bg-yellow-800" title="yellow-800">
            yellow-800
          </ColorBox>
          <ColorBox className="bg-yellow-900" title="yellow-900">
            yellow-900
          </ColorBox>
          <ColorBox className="bg-yellow-950" title="yellow-950">
            yellow-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Lime</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-lime-50" title="lime-50">
            lime-50
          </ColorBox>
          <ColorBox className="bg-lime-100" title="lime-100">
            lime-100
          </ColorBox>
          <ColorBox className="bg-lime-200" title="lime-200">
            lime-200
          </ColorBox>
          <ColorBox className="bg-lime-300" title="lime-300">
            lime-300
          </ColorBox>
          <ColorBox className="bg-lime-400" title="lime-400">
            lime-400
          </ColorBox>
          <ColorBox className="bg-lime-500" title="lime-500">
            lime-500
          </ColorBox>
          <ColorBox className="bg-lime-600" title="lime-600">
            lime-600
          </ColorBox>
          <ColorBox className="bg-lime-700" title="lime-700">
            lime-700
          </ColorBox>
          <ColorBox className="bg-lime-800" title="lime-800">
            lime-800
          </ColorBox>
          <ColorBox className="bg-lime-900" title="lime-900">
            lime-900
          </ColorBox>
          <ColorBox className="bg-lime-950" title="lime-950">
            lime-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Green</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-green-50" title="green-50">
            green-50
          </ColorBox>
          <ColorBox className="bg-green-100" title="green-100">
            green-100
          </ColorBox>
          <ColorBox className="bg-green-200" title="green-200">
            green-200
          </ColorBox>
          <ColorBox className="bg-green-300" title="green-300">
            green-300
          </ColorBox>
          <ColorBox className="bg-green-400" title="green-400">
            green-400
          </ColorBox>
          <ColorBox className="bg-green-500" title="green-500">
            green-500
          </ColorBox>
          <ColorBox className="bg-green-600" title="green-600">
            green-600
          </ColorBox>
          <ColorBox className="bg-green-700" title="green-700">
            green-700
          </ColorBox>
          <ColorBox className="bg-green-800" title="green-800">
            green-800
          </ColorBox>
          <ColorBox className="bg-green-900" title="green-900">
            green-900
          </ColorBox>
          <ColorBox className="bg-green-950" title="green-950">
            green-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Green</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-green-50" title="green-50">
            green-50
          </ColorBox>
          <ColorBox className="bg-green-100" title="green-100">
            green-100
          </ColorBox>
          <ColorBox className="bg-green-200" title="green-200">
            green-200
          </ColorBox>
          <ColorBox className="bg-green-300" title="green-300">
            green-300
          </ColorBox>
          <ColorBox className="bg-green-400" title="green-400">
            green-400
          </ColorBox>
          <ColorBox className="bg-green-500" title="green-500">
            green-500
          </ColorBox>
          <ColorBox className="bg-green-600" title="green-600">
            green-600
          </ColorBox>
          <ColorBox className="bg-green-700" title="green-700">
            green-700
          </ColorBox>
          <ColorBox className="bg-green-800" title="green-800">
            green-800
          </ColorBox>
          <ColorBox className="bg-green-900" title="green-900">
            green-900
          </ColorBox>
          <ColorBox className="bg-green-950" title="green-950">
            green-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Emerald</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-emerald-50" title="emerald-50">
            emerald-50
          </ColorBox>
          <ColorBox className="bg-emerald-100" title="emerald-100">
            emerald-100
          </ColorBox>
          <ColorBox className="bg-emerald-200" title="emerald-200">
            emerald-200
          </ColorBox>
          <ColorBox className="bg-emerald-300" title="emerald-300">
            emerald-300
          </ColorBox>
          <ColorBox className="bg-emerald-400" title="emerald-400">
            emerald-400
          </ColorBox>
          <ColorBox className="bg-emerald-500" title="emerald-500">
            emerald-500
          </ColorBox>
          <ColorBox className="bg-emerald-600" title="emerald-600">
            emerald-600
          </ColorBox>
          <ColorBox className="bg-emerald-700" title="emerald-700">
            emerald-700
          </ColorBox>
          <ColorBox className="bg-emerald-800" title="emerald-800">
            emerald-800
          </ColorBox>
          <ColorBox className="bg-emerald-900" title="emerald-900">
            emerald-900
          </ColorBox>
          <ColorBox className="bg-emerald-950" title="emerald-950">
            emerald-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Teal</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-teal-50" title="teal-50">
            teal-50
          </ColorBox>
          <ColorBox className="bg-teal-100" title="teal-100">
            teal-100
          </ColorBox>
          <ColorBox className="bg-teal-200" title="teal-200">
            teal-200
          </ColorBox>
          <ColorBox className="bg-teal-300" title="teal-300">
            teal-300
          </ColorBox>
          <ColorBox className="bg-teal-400" title="teal-400">
            teal-400
          </ColorBox>
          <ColorBox className="bg-teal-500" title="teal-500">
            teal-500
          </ColorBox>
          <ColorBox className="bg-teal-600" title="teal-600">
            teal-600
          </ColorBox>
          <ColorBox className="bg-teal-700" title="teal-700">
            teal-700
          </ColorBox>
          <ColorBox className="bg-teal-800" title="teal-800">
            teal-800
          </ColorBox>
          <ColorBox className="bg-teal-900" title="teal-900">
            teal-900
          </ColorBox>
          <ColorBox className="bg-teal-950" title="teal-950">
            teal-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Cyan</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-cyan-50" title="cyan-50">
            cyan-50
          </ColorBox>
          <ColorBox className="bg-cyan-100" title="cyan-100">
            cyan-100
          </ColorBox>
          <ColorBox className="bg-cyan-200" title="cyan-200">
            cyan-200
          </ColorBox>
          <ColorBox className="bg-cyan-300" title="cyan-300">
            cyan-300
          </ColorBox>
          <ColorBox className="bg-cyan-400" title="cyan-400">
            cyan-400
          </ColorBox>
          <ColorBox className="bg-cyan-500" title="cyan-500">
            cyan-500
          </ColorBox>
          <ColorBox className="bg-cyan-600" title="cyan-600">
            cyan-600
          </ColorBox>
          <ColorBox className="bg-cyan-700" title="cyan-700">
            cyan-700
          </ColorBox>
          <ColorBox className="bg-cyan-800" title="cyan-800">
            cyan-800
          </ColorBox>
          <ColorBox className="bg-cyan-900" title="cyan-900">
            cyan-900
          </ColorBox>
          <ColorBox className="bg-cyan-950" title="cyan-950">
            cyan-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Sky</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-sky-50" title="sky-50">
            sky-50
          </ColorBox>
          <ColorBox className="bg-sky-100" title="sky-100">
            sky-100
          </ColorBox>
          <ColorBox className="bg-sky-200" title="sky-200">
            sky-200
          </ColorBox>
          <ColorBox className="bg-sky-300" title="sky-300">
            sky-300
          </ColorBox>
          <ColorBox className="bg-sky-400" title="sky-400">
            sky-400
          </ColorBox>
          <ColorBox className="bg-sky-500" title="sky-500">
            sky-500
          </ColorBox>
          <ColorBox className="bg-sky-600" title="sky-600">
            sky-600
          </ColorBox>
          <ColorBox className="bg-sky-700" title="sky-700">
            sky-700
          </ColorBox>
          <ColorBox className="bg-sky-800" title="sky-800">
            sky-800
          </ColorBox>
          <ColorBox className="bg-sky-900" title="sky-900">
            sky-900
          </ColorBox>
          <ColorBox className="bg-sky-950" title="sky-950">
            sky-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Blue</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-blue-50" title="blue-50">
            blue-50
          </ColorBox>
          <ColorBox className="bg-blue-100" title="blue-100">
            blue-100
          </ColorBox>
          <ColorBox className="bg-blue-200" title="blue-200">
            blue-200
          </ColorBox>
          <ColorBox className="bg-blue-300" title="blue-300">
            blue-300
          </ColorBox>
          <ColorBox className="bg-blue-400" title="blue-400">
            blue-400
          </ColorBox>
          <ColorBox className="bg-blue-500" title="blue-500">
            blue-500
          </ColorBox>
          <ColorBox className="bg-blue-600" title="blue-600">
            blue-600
          </ColorBox>
          <ColorBox className="bg-blue-700" title="blue-700">
            blue-700
          </ColorBox>
          <ColorBox className="bg-blue-800" title="blue-800">
            blue-800
          </ColorBox>
          <ColorBox className="bg-blue-900" title="blue-900">
            blue-900
          </ColorBox>
          <ColorBox className="bg-blue-950" title="blue-950">
            blue-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Indigo</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-indigo-50" title="indigo-50">
            indigo-50
          </ColorBox>
          <ColorBox className="bg-indigo-100" title="indigo-100">
            indigo-100
          </ColorBox>
          <ColorBox className="bg-indigo-200" title="indigo-200">
            indigo-200
          </ColorBox>
          <ColorBox className="bg-indigo-300" title="indigo-300">
            indigo-300
          </ColorBox>
          <ColorBox className="bg-indigo-400" title="indigo-400">
            indigo-400
          </ColorBox>
          <ColorBox className="bg-indigo-500" title="indigo-500">
            indigo-500
          </ColorBox>
          <ColorBox className="bg-indigo-600" title="indigo-600">
            indigo-600
          </ColorBox>
          <ColorBox className="bg-indigo-700" title="indigo-700">
            indigo-700
          </ColorBox>
          <ColorBox className="bg-indigo-800" title="indigo-800">
            indigo-800
          </ColorBox>
          <ColorBox className="bg-indigo-900" title="indigo-900">
            indigo-900
          </ColorBox>
          <ColorBox className="bg-indigo-950" title="indigo-950">
            indigo-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Violet</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-violet-50" title="violet-50">
            violet-50
          </ColorBox>
          <ColorBox className="bg-violet-100" title="violet-100">
            violet-100
          </ColorBox>
          <ColorBox className="bg-violet-200" title="violet-200">
            violet-200
          </ColorBox>
          <ColorBox className="bg-violet-300" title="violet-300">
            violet-300
          </ColorBox>
          <ColorBox className="bg-violet-400" title="violet-400">
            violet-400
          </ColorBox>
          <ColorBox className="bg-violet-500" title="violet-500">
            violet-500
          </ColorBox>
          <ColorBox className="bg-violet-600" title="violet-600">
            violet-600
          </ColorBox>
          <ColorBox className="bg-violet-700" title="violet-700">
            violet-700
          </ColorBox>
          <ColorBox className="bg-violet-800" title="violet-800">
            violet-800
          </ColorBox>
          <ColorBox className="bg-violet-900" title="violet-900">
            violet-900
          </ColorBox>
          <ColorBox className="bg-violet-950" title="violet-950">
            violet-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Purple</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-purple-50" title="purple-50">
            purple-50
          </ColorBox>
          <ColorBox className="bg-purple-100" title="purple-100">
            purple-100
          </ColorBox>
          <ColorBox className="bg-purple-200" title="purple-200">
            purple-200
          </ColorBox>
          <ColorBox className="bg-purple-300" title="purple-300">
            purple-300
          </ColorBox>
          <ColorBox className="bg-purple-400" title="purple-400">
            purple-400
          </ColorBox>
          <ColorBox className="bg-purple-500" title="purple-500">
            purple-500
          </ColorBox>
          <ColorBox className="bg-purple-600" title="purple-600">
            purple-600
          </ColorBox>
          <ColorBox className="bg-purple-700" title="purple-700">
            purple-700
          </ColorBox>
          <ColorBox className="bg-purple-800" title="purple-800">
            purple-800
          </ColorBox>
          <ColorBox className="bg-purple-900" title="purple-900">
            purple-900
          </ColorBox>
          <ColorBox className="bg-purple-950" title="purple-950">
            purple-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Fuchsia</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-fuchsia-50" title="fuchsia-50">
            fuchsia-50
          </ColorBox>
          <ColorBox className="bg-fuchsia-100" title="fuchsia-100">
            fuchsia-100
          </ColorBox>
          <ColorBox className="bg-fuchsia-200" title="fuchsia-200">
            fuchsia-200
          </ColorBox>
          <ColorBox className="bg-fuchsia-300" title="fuchsia-300">
            fuchsia-300
          </ColorBox>
          <ColorBox className="bg-fuchsia-400" title="fuchsia-400">
            fuchsia-400
          </ColorBox>
          <ColorBox className="bg-fuchsia-500" title="fuchsia-500">
            fuchsia-500
          </ColorBox>
          <ColorBox className="bg-fuchsia-600" title="fuchsia-600">
            fuchsia-600
          </ColorBox>
          <ColorBox className="bg-fuchsia-700" title="fuchsia-700">
            fuchsia-700
          </ColorBox>
          <ColorBox className="bg-fuchsia-800" title="fuchsia-800">
            fuchsia-800
          </ColorBox>
          <ColorBox className="bg-fuchsia-900" title="fuchsia-900">
            fuchsia-900
          </ColorBox>
          <ColorBox className="bg-fuchsia-950" title="fuchsia-950">
            fuchsia-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Pink</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-pink-50" title="pink-50">
            pink-50
          </ColorBox>
          <ColorBox className="bg-pink-100" title="pink-100">
            pink-100
          </ColorBox>
          <ColorBox className="bg-pink-200" title="pink-200">
            pink-200
          </ColorBox>
          <ColorBox className="bg-pink-300" title="pink-300">
            pink-300
          </ColorBox>
          <ColorBox className="bg-pink-400" title="pink-400">
            pink-400
          </ColorBox>
          <ColorBox className="bg-pink-500" title="pink-500">
            pink-500
          </ColorBox>
          <ColorBox className="bg-pink-600" title="pink-600">
            pink-600
          </ColorBox>
          <ColorBox className="bg-pink-700" title="pink-700">
            pink-700
          </ColorBox>
          <ColorBox className="bg-pink-800" title="pink-800">
            pink-800
          </ColorBox>
          <ColorBox className="bg-pink-900" title="pink-900">
            pink-900
          </ColorBox>
          <ColorBox className="bg-pink-950" title="pink-950">
            pink-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
      <ColorChart>
        <ColorChartTitle>Rose</ColorChartTitle>
        <ColorGrid>
          <ColorBox className="bg-rose-50" title="rose-50">
            rose-50
          </ColorBox>
          <ColorBox className="bg-rose-100" title="rose-100">
            rose-100
          </ColorBox>
          <ColorBox className="bg-rose-200" title="rose-200">
            rose-200
          </ColorBox>
          <ColorBox className="bg-rose-300" title="rose-300">
            rose-300
          </ColorBox>
          <ColorBox className="bg-rose-400" title="rose-400">
            rose-400
          </ColorBox>
          <ColorBox className="bg-rose-500" title="rose-500">
            rose-500
          </ColorBox>
          <ColorBox className="bg-rose-600" title="rose-600">
            rose-600
          </ColorBox>
          <ColorBox className="bg-rose-700" title="rose-700">
            rose-700
          </ColorBox>
          <ColorBox className="bg-rose-800" title="rose-800">
            rose-800
          </ColorBox>
          <ColorBox className="bg-rose-900" title="rose-900">
            rose-900
          </ColorBox>
          <ColorBox className="bg-rose-950" title="rose-950">
            rose-950
          </ColorBox>
        </ColorGrid>
      </ColorChart>
    </ProjectWrapper>
  );
}
