// '/' endpoint

const getArtists = (req, res, next) => {
    if(Object.keys(req.query).length){
        const{
            firstName,
            lastName,
            gender
        } = req.query

        const filter = [];

        if(firstName)filter.push(firstName);
        if(lastName)filter.push(lastName);
        if(gender)filter.push(gender);

        for(i=0; i<filter.length; i++){
            console.log(`Searching for artist(s) by: ${filter[i]}`)
        }
    }
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: 'show me all artist'
    })
}

const postArtist = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: `add artist with the following fields:
        Fisrt Name: ${req.body.firstName}
        Last Name: ${req.body.lastName}
        Gender: ${req.body.gender}`
    })
}

const deleteArtists = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: 'delete all artists'
    })
}

// '/songId' endpoint

const getArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: `show artist with id: ${req.params.artistId}`
    })
}

const updateArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: `update artist with id: ${req.params.artistId}`
    })
}

const deleteArtist = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({
        success: true, msg: `delete artist with id: ${req.params.artistId}`
    })
}

module.exports = {
    getArtists,
    postArtist,
    deleteArtists,
    getArtist,
    updateArtist,
    deleteArtist
}
