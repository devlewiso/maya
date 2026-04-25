import { SkeletonCard, SkeletonProject, SkeletonSkill } from '@/app/components/Skeleton'

export default function DashboardLoading() {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header skeleton */}
      <div className="mb-8">
        <div className="h-8 w-64 bg-[#f5f7fc] rounded mb-2 animate-pulse" />
        <div className="h-4 w-48 bg-[#f5f7fc] rounded animate-pulse" />
      </div>

      {/* Stats skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects skeleton */}
        <div className="lg:col-span-2">
          <div className="h-6 w-32 bg-[#f5f7fc] rounded mb-4 animate-pulse" />
          <div className="space-y-3">
            <SkeletonProject />
            <SkeletonProject />
          </div>
        </div>

        {/* Skills skeleton */}
        <div>
          <div className="h-6 w-24 bg-[#f5f7fc] rounded mb-4 animate-pulse" />
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
            <SkeletonSkill />
            <SkeletonSkill />
            <SkeletonSkill />
          </div>
        </div>
      </div>
    </div>
  )
}
