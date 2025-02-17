export default function mealsPage({params}){
    return(<div>
        <h1 style={{ color: 'white', textAlign: 'center' }}>Dynamic route meal name page: {params.someName}</h1>
        </div>
    );
}