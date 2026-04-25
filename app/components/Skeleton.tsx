'use client'

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#f5f7fc] via-[#eef1f8] to-[#f5f7fc] bg-[length:200%_100%] ${className}`}
      style={{
        animation: 'shimmer 1.5s infinite',
      }}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-[#dde3f0] p-5 animate-pulse">
      <div className="h-8 w-16 bg-[#f5f7fc] rounded mb-2" />
      <div className="h-4 w-24 bg-[#f5f7fc] rounded" />
    </div>
  )
}

export function SkeletonProject() {
  return (
    <div className="bg-white rounded-xl border border-[#dde3f0] p-4 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="h-4 w-32 bg-[#f5f7fc] rounded mb-2" />
          <div className="h-3 w-48 bg-[#f5f7fc] rounded" />
        </div>
        <div className="h-4 w-12 bg-[#f5f7fc] rounded" />
      </div>
    </div>
  )
}

export function SkeletonSkill() {
  return (
    <div className="bg-white rounded-xl border border-[#dde3f0] p-3 text-center animate-pulse">
      <div className="w-8 h-8 bg-[#f5f7fc] rounded-full mx-auto mb-2" />
      <div className="h-3 w-12 bg-[#f5f7fc] rounded mx-auto" />
    </div>
  )
}
