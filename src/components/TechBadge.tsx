interface BadgeProps {
  label: string;
}

export default function TechBadge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
      {label}
    </span>
  );
}
