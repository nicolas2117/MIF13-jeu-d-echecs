/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package jeu.model;

import java.util.ArrayList;

/**
 *
 * @author nicolas
 */
public class GestionParties {
    private ArrayList<Partie> parties;
    public GestionParties() {
        parties = new ArrayList<Partie>();
    }
    
    public Partie getPartieParPseudoDeJoueur(String pseudo) {
        for(int i = 0; i < parties.size(); i++) {
            String joueur1 = parties.get(i).getJoueur1();
            String joueur2 = parties.get(i).getJoueur2();
            if (pseudo.equals(joueur1) || pseudo.equals(joueur2)) {
                return parties.get(i);
            }
        }
        return null;
    }
}
