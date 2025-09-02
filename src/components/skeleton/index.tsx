export function HeaderSkeleton() {
  return (
    <div className="relative bg-white/40 backdrop-blur-2xl border-b border-white/20">
      <div className="relative z-10 px-6 pt-20 pb-16">
        <div className="flex flex-col items-center space-y-5">
          {/* Avatar skeleton */}
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] animate-shimmer" />
          </div>
          
          {/* Name skeleton */}
          <div className="text-center space-y-2">
            <div className="h-8 w-48 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: '0.1s' }} />
            <div className="h-5 w-36 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: '0.2s' }} />
          </div>
          
          {/* Location skeleton */}
          <div className="h-8 w-32 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded-full animate-shimmer" style={{ animationDelay: '0.3s' }} />
          
          {/* Contact buttons skeleton */}
          <div className="flex flex-col space-y-3 w-full max-w-xs">
            <div className="h-12 w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded-xl animate-shimmer" style={{ animationDelay: '0.4s' }} />
            <div className="h-12 w-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded-xl animate-shimmer" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServiceCardSkeleton({ index = 0 }: { index?: number }) {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-glass hover:shadow-glass-hover transition-all duration-500">
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-3">
          <div className="h-6 w-32 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${index * 0.1}s` }} />
          <div className="h-4 w-24 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${index * 0.1 + 0.1}s` }} />
          <div className="h-4 w-20 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${index * 0.1 + 0.2}s` }} />
        </div>
        <div className="space-y-2">
          <div className="h-6 w-16 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${index * 0.1 + 0.3}s` }} />
          <div className="h-3 w-12 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${index * 0.1 + 0.4}s` }} />
        </div>
      </div>
    </div>
  );
}

export function PortfolioSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="aspect-square bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded-2xl animate-shimmer shadow-glass"
          style={{ animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  );
}

export function WorkingHoursSkeleton() {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
      {/* Status skeleton */}
      <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-neutral-50/50 to-white/50 border border-neutral-100/50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] animate-shimmer" />
          <div className="space-y-1">
            <div className="h-4 w-16 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" />
            <div className="h-3 w-24 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: '0.1s' }} />
          </div>
        </div>
      </div>

      {/* Hours skeleton */}
      <div className="space-y-2">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex justify-between items-center py-3 px-4 rounded-xl">
            <div className="h-4 w-20 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${i * 0.05}s` }} />
            <div className="h-4 w-32 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] rounded animate-shimmer" style={{ animationDelay: `${i * 0.05 + 0.1}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen font-inter">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-glass-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-glass-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-glass-primary/5 to-glass-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-lg mx-auto min-h-screen relative bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-sm shadow-2xl">
        {/* Header Skeleton */}
        <HeaderSkeleton />

        {/* Content Skeleton */}
        <div className="px-6 py-12 space-y-16 relative z-10">
          {/* Services Section */}
          <section className="space-y-8">
            <div>
              <div className="h-7 w-20 bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-5 w-64 bg-neutral-200 rounded animate-pulse" />
            </div>
            
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <ServiceCardSkeleton key={i} index={i} />
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="space-y-8">
            <div>
              <div className="h-7 w-24 bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-5 w-48 bg-neutral-200 rounded animate-pulse" />
            </div>
            <PortfolioSkeleton />
          </section>

          {/* Working Hours Section */}
          <section className="space-y-8">
            <div>
              <div className="h-7 w-32 bg-neutral-200 rounded animate-pulse mb-2" />
              <div className="h-5 w-60 bg-neutral-200 rounded animate-pulse" />
            </div>
            <WorkingHoursSkeleton />
          </section>

          {/* Footer skeleton */}
          <section className="pb-24">
            <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
              <div className="h-6 w-24 bg-neutral-200 rounded animate-pulse mx-auto mb-4" />
              <div className="h-4 w-full bg-neutral-200 rounded animate-pulse mb-4" />
              <div className="border-t border-neutral-200/50 pt-4">
                <div className="h-3 w-48 bg-neutral-200 rounded animate-pulse mx-auto" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}