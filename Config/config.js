gulpConfig = {
    css: {
        src: "Src/css/",
        dst: "Assets/css/"
    },
    js: {
        src: "Src/js/",
        dst: "Assets/js/"
    }

}

database = {
    db_name: "ListeDeCourse",
    db_host: "localhost",
    db_user: "utilisateur",
    db_pwd: "motdepasse"
}
module.exports = { gulpConfig, database }