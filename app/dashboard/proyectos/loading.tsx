import { SkeletonProject } from '@/app/components/Skeleton'

export default function ProyectosLoading() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-8 w-32 bg-[#f5f7fc] rounded mb-2 animate-pulse" />
          <div className="h-4 w-48 bg-[#f5f7fc] rounded animate-pulse" />
        </div>
        <div className="h-10 w-32 bg-[#f5f7fc] rounded animate-pulse" />
      </div>

      {/* Projects grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SkeletonProject />
        <SkeletonProject />
        <SkeletonProject />
      </div>
    </div>
  )
}
