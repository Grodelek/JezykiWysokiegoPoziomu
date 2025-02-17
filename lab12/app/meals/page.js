import Link from 'next/link';

const mealsData = [
    { slug: 'meal-1', title: 'Meal 1', image: '/images/meal1.jpg', summary: 'A delicious meal 1', creator: 'John' },
    { slug: 'meal-2', title: 'Meal 2', image: '/images/meal2.jpg', summary: 'A delicious meal 2', creator: 'Jane' },
    // Dodaj więcej posiłków tutaj
];

export default function MealsPage() {
    return (
        <main>
            <h1>Meals List</h1>
            <ul>
                {mealsData.map((meal) => (
                    <li key={meal.slug}>
                        <Link href={`/meals/${meal.slug}`}>
                            <h2>{meal.title}</h2>
                            <img src={meal.image} alt={meal.title} width={200} height={200} />
                            <p>{meal.summary}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
