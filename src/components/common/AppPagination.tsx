// components/ui/app-pagination.tsx
import { usePagination } from "@mantine/hooks";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationLink,
} from "./Pagination";

type AppPaginationProps = {
  length: number;
  itemsPerPage: number;
  page: number;
  onChange: (page: number) => void;
  siblings?: number;
  boundaries?: number;
  className?: string;
};

export function AppPagination({
  length,
  itemsPerPage,
  page,
  onChange,
  siblings = 1,
  boundaries = 1,
  className,
}: AppPaginationProps) {
  const total = Math.ceil(length / itemsPerPage);
  const { range } = usePagination({
    total,
    page,
    onChange,
    siblings,
    boundaries,
  });

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => page > 1 && onChange(page - 1)}
            aria-disabled={page === 1}
            isActive={page === 1}
          />
        </PaginationItem>

        {range.map((item, idx) => (
          <PaginationItem key={idx}>
            {item === "dots" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={`rounded-lg border-none px-2 py-1 text-xl cursor-pointer transition-colors ${
                  item === page
                    ? "bg-primary-500 text-primary-50 "
                    : "hover:bg-primary-500/30"
                }`}
                isActive={item === page}
                onClick={() => onChange(item)}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => page < total && onChange(page + 1)}
            aria-disabled={page === total}
            isActive={page === total}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
