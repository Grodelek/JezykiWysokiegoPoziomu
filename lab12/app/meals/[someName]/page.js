import Image from 'next/image';

const mealsData = [
    { slug: 'meal-1', title: 'Meal 1', image: '/images/meal1.jpg', summary: 'A delicious meal 1', creator: 'John' },
    { slug: 'meal-2', title: 'Meal 2', image: '/images/meal2.jpg', summary: 'A delicious meal 2', creator: 'Jane' },
    // Dodaj więcej posiłków tutaj
];

export function generateStaticParams() {
    return mealsData.map((meal) => ({
        slug: meal.slug,
    }));
}

export default function MealDetail({ params }) {
    const meal = mealsData.find((meal) => meal.slug === params.slug);

    if (!meal) {
        return <p>Meal not found!</p>;
    }

    return (
        <div>
            <h1>{meal.title}</h1>
            <Image src={meal.image} alt={meal.title} width={500} height={500} />
            <p>{meal.summary}</p>
            <p>Created by {meal.creator}</p>
        </div>
    );
}
