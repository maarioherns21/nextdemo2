import Tapes from "../models/movie.js";


export const index = async (req, res) => {
    try {
      const movies = await Tapes.find();
  
      res.status(200).json(movies);
    } catch (error) {
      console.log(error.message);
  
      res.status(401).json({ message: error.message });
    }
  };



export const createMovie = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}




export const deleteMovie = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}




export const updateMovie = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}




export const commentMovie = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}



export const likeMovie = async (req, res) => {

    try {
        
    } catch (error) {
        
    }
}