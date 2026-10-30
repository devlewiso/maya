'use client'

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#f6f5f1] via-[#efede6] to-[#f6f5f1] bg-[length:200%_100%] ${className}`}
      style={{
        animation: 'shimmer 1.5s infinite',
      }}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-[#e4e2da] p-5 animate-pulse">
      <div className="h-8 w-16 bg-[#f6f5f1] rounded mb-2" />
      <div className="h-4 w-24 bg-[#f6f5f1] rounded" />
    </div>
  )
}

export function SkeletonProject() {
  return (
    <div className="bg-white rounded-xl border border-[#e4e2da] p-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-4 w-32 bg-[#f6f5f1] rounded mb-2" />
          <div className="h-3 w-48 bg-[#f6f5f1] rounded" />
        </div>
        <div className="h-4 w-12 bg-[#f6f5f1] rounded" />
      </div>
    </div>
  )
}

export function SkeletonSkill() {
  return (
    <div className="bg-white rounded-xl border border-[#e4e2da] p-3 text-center animate-pulse">
      <div className="w-8 h-8 bg-[#f6f5f1] rounded-full mx-auto mb-2" />
      <div className="h-3 w-12 bg-[#f6f5f1] rounded mx-auto" />
    </div>
  )
}
