const Movie = require("../db/movieModel");
const express = require("express");

exports.listNote = async () => {
		try {
		
			let list = await Movie.find({});
			if (list.length < 1) {
				return list.length;
			} else {


				for (let i = 0; i < list.length; i++) {
					console.log(chalk.green(`${i + 1}) ${list[i].note}`));
				}
			}
	
			return list.length;
		} catch (error) {
			console.log("error in listNote function");
			console.log(error);
		}
	};