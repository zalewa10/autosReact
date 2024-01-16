import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}
