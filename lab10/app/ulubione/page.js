import FavoriteItem from './components/FavoriteItem';

export default function UlubionePage() {
  return (
    <div>
      <p>Oto moje ulubione filmy i gry:</p>
      <FavoriteItem title="Incepcja" description="Film o wielopoziomowych snach." />
      <FavoriteItem title="Wiedźmin 3" description="Gra RPG z otwartym światem." />
    </div>
  );
}
