import { PageProps } from "@inertiajs/core";

// pass this type to usePage<T>() to get custom shared props
export interface CustomPageProps extends PageProps {
  auth: { user: { id: number; emailAddress: string; admin: boolean } | null };
}
