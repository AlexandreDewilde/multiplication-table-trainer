import * as Localization from 'expo-localization';
import i18n from 'i18n-js';


i18n.translations = {
    en: {
        choose_categories: 'Choose categories',
        start_game: 'Start playing',
        min_cat: 'Please choose at least 1 category',
        game_over: 'Game Over',
        best_score: 'Best Score',
        calculation: 'Calculation',
        end: 'End'
    },
    fr: {
        choose_categories:'Choisir les catégories',
        start_game:'Commencer à jouer',
        min_cat: 'Veuillez choisir au moins 1 catégorie',
        game_over: 'Fin de la partie',
        best_score: 'Meilleur Score',
        calculation: 'Calcul',
        end: 'Fin'
    }
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n