import type { Category } from "@/lib/types";
import CategoryCard from "@/components/CategoryCard";
import styles from "./CategoryGrid.module.css";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <ul className={styles.grid}>
      {categories.map((category) => (
        <li key={category.slug}>
          <CategoryCard category={category} />
        </li>
      ))}
    </ul>
  );
}
