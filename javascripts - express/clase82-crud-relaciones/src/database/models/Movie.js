module.exports = (sequelize, dataTypes) => {
    let alias = 'Movie'; // esto debería estar en singular
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: dataTypes.BIGINT(10),
        
        genre_id: dataTypes.BIGINT(10),
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Movie = sequelize.define(alias,cols,config);

    //Aquí debes realizar lo necesario para crear las relaciones con los otros modelos (Genre - Actor)
    Movie.associate = function(models){
        Movie.belongsTo(models.Genre,{
            as:'genre',
            foreigKey:'genre_id'
        })
        // peiculas tiene una relacion de muchos a muchos
        Movie.belongsToMany(models.Actor,{
            as:'actors',
            // la tabla intermedia va a ser actor_movie
            through:'actor_movie',
            //la forenigKey siempre va la del modelos que estamos
            foreigKey:'movie_id,',
            // y ver la tabla ques se cruza
            otherKey:'actor_id',
            timestamps:false
        })

    }
    return Movie
};