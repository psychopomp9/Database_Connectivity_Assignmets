import { Component, OnInit } from "@angular/core";

export class Manga {
    _id: string;
    title: string;
    author: string;
    description: string;
    price: number;
    publication_year: Date;
    reviews: Review[];
}

class Review {
    reviewer: string;
    reviewText: string;
    rating: number;
}