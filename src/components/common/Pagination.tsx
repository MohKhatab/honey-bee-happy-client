import { PiArrowLeft, PiArrowRight, PiDotsThree } from "react-icons/pi";

function Pagination({ ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={"mx-auto flex w-full justify-center"}
      {...props}
    />
  );
}

function PaginationContent({ ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={"flex flex-row items-center gap-1"}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

function PaginationLink({ isActive, ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      {...props}
    />
  );
}

function PaginationPrevious({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      className={`
        gap-1 p-2 rounded-lg text-xl block transition-colors
      ${
        props.isActive
          ? " text-grayscale-300 cursor-not-allowed "
          : " cursor-pointer hover:bg-primary-500/30 "
      }
      `}
      {...props}
    >
      <PiArrowLeft />
    </PaginationLink>
  );
}

function PaginationNext({
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      className={`
        gap-1 p-2 rounded-lg text-xl block transition-colors 
      ${
        props.isActive
          ? " text-grayscale-300 cursor-not-allowed "
          : " cursor-pointer hover:bg-primary-500/30 "
      }
      `}
      {...props}
    >
      <PiArrowRight />
    </PaginationLink>
  );
}

function PaginationEllipsis({ ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={"flex items-center justify-center"}
      {...props}
    >
      <PiDotsThree className="text-xl" />
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
