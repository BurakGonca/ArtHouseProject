function CategoryComponent({ categories }) {
    return (

        <>


            <div>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h2>{category.categoryName}</h2> {/* Kategori adýný göster */}

                    </div>
                ))}
            </div>





        </>

    );
}

export default CategoryComponent;