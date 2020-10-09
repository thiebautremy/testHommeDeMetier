import React from 'react';
import { Card, Image } from 'semantic-ui-react'


import menuisier from '../../assets/Services/menuisier.png';
import carreleur from '../../assets/Services/carreleur.png';
import chauffagiste from '../../assets/Services/chauffagiste.png';
import climatisation from '../../assets/Services/climatisation.png';
import constructionGrosOeuvre from '../../assets/Services/construction-gros-oeuvre.png';
import couvreurZingueur from '../../assets/Services/couvreur-zingueur.png';
import deboucheur from '../../assets/Services/deboucheur.png';
import decorateurInterieur from '../../assets/Services/decorateur-interieur.png';
import domotique from '../../assets/Services/domotique.png';
import electricien from '../../assets/Services/electricien.png';
import jardinier from '../../assets/Services/jardinier.png';
import macon from '../../assets/Services/macon.png';
import maisonAnnexe from '../../assets/Services/maison-annexe.png';
import maisonPanneauxSolaires from '../../assets/Services/maison-panneaux-solaires.png';
import miseEnConformite from '../../assets/Services/mise-en-conformite.png';
import nettoyage from '../../assets/Services/nettoyage.png';
import paysagiste from '../../assets/Services/paysagiste.png';
import peintre from '../../assets/Services/peintre.png';
import piscineSurMesure from '../../assets/Services/piscine-sur-mesure.png';
import plafonneur from '../../assets/Services/plafonneur.png';
import plombier from '../../assets/Services/plombier.png';
import renovationGenerale from '../../assets/Services/renovation-generale.png';
import serrurier from '../../assets/Services/serrurier.png';
import vitrier from '../../assets/Services/vitrier.png';




import './services.scss';

const Services = () => (
  <div className="services">
    <Card.Group stackable centered>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src= {menuisier}
        />
        <Card.Header>Menuisier</Card.Header>
        <Card.Description>
        Nouvelle porte, chambre mansardée, terrasse en bois. Nos artisans menuisiers mettent leur maîtrise du bois à votre service.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={plafonneur}
        />
        <Card.Header>Plafonneur</Card.Header>
        <Card.Description>
        Plafonnage de murs et plafonds, lattage, faux plafonds, cloisons, isolation thermique. Nos professionnels compétents finalisent vos travaux.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={constructionGrosOeuvre}
        />
        <Card.Header>Gros oeuvre</Card.Header>
        <Card.Description>
        Vous avez besoin d'un professionnel spécialisé dans le gros oeuvre pour un chantier en cours ou à venir ?
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={nettoyage}
        />
        <Card.Header>Nettoyage</Card.Header>
        <Card.Description>
        Notre service de nettoyage prend en charge l'entretien et la maintenance de vos locaux et de vos vitres.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={vitrier}
        />
        <Card.Header>Vitrier</Card.Header>
        <Card.Description>
        Réparation d'urgence de vos fenêtres, remplacement de vos châssis, installation de volets, aménagement de vérandas et pergolas.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={plombier}
        />
        <Card.Header>Plombier</Card.Header>
        <Card.Description>
        Fuite d'eau, pose de tuyaux, raccordement de robinet, évacuation des eaux usées ? Engagez un plombier qualifié.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={decorateurInterieur}
        />
        <Card.Header>Décorateur d'intérieur</Card.Header>
        <Card.Description>
        Donnez un nouveau souffle à votre décoration d'intérieur en collaborant avec nos décorateurs spécialisés jamais à court d'idées.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={peintre}
        />
        <Card.Header>Peintre</Card.Header>
        <Card.Description>
        Envie de rafraîchir votre habitation ? Vous souhaitez mettre une touche finale à vos travaux de rénovation ?
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={maisonAnnexe}
        />
        <Card.Header>Annexe d'habitation</Card.Header>
        <Card.Description>
        Vous êtes à la recherche d'en entrepeneur en vue de construire une annexe, une véranda ou une pergola ?
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={jardinier}
        />
        <Card.Header>Jardinier</Card.Header>
        <Card.Description>
        Tonte ou scarification de votre pelouse, taillage des haies, abattage ou élagage de vos arbres. Nos jardiniers entretiennent votre jardin.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={domotique}
        />
        <Card.Header>Domotique</Card.Header>
        <Card.Description>
        Vous souhaitez que votre habitation devienne "connectée" ? Nos spécialistes de la domotique sont à votre service.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={piscineSurMesure}
        />
        <Card.Header>Piscine sur mesure</Card.Header>
        <Card.Description>
        Vous avez toujours rêvé d'avoir une piscine sur mesure à votre domicile ? Rencontrez notre pisciniste professionnel pour un devis gratuit.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={macon}
        />
        <Card.Header>Maçon</Card.Header>
        <Card.Description>
        Vous souhaitez agrandir votre habitation ? Rénover votre façade ou isoler vos murs ? Faites confiance au savoir-faire de nos maçons.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={serrurier}
        />
        <Card.Header>Serrurier</Card.Header>
        <Card.Description>
        Que ce soit pour sécuriser votre habitation ou remplacer une serrure en urgence, notre serrurier est à votre service
7 jours sur 7.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={deboucheur}
        />
        <Card.Header>Déboucheur</Card.Header>
        <Card.Description>
        Evier obstrué, WC bouché, tuyau encrassé, évacuation bloquée ? Nos professionnels agissent vite avec un résultat durable.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={miseEnConformite}
        />
        <Card.Header>Mise en conformité</Card.Header>
        <Card.Description>
        Il est impératif pour vous de réaliser rapidement une mise en conformité ? Faites appel à nos électriciens.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={paysagiste}
        />
        <Card.Header>Paysagiste</Card.Header>
        <Card.Description>
        Vous désirez aménager votre jardin et rendre jaloux tout le voisinage ? Nos paysagistes sont les spécialistes dont vous avez besoin.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={maisonPanneauxSolaires}
        />
        <Card.Header>Panneaux solaires</Card.Header>
        <Card.Description>
        Les panneaux solaires photovoltaïques sont une vraie source d'énergie durable et nos installateurs maximisent leur rendement.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={climatisation}
        />
        <Card.Header>Climatisation</Card.Header>
        <Card.Description>
        Il fait trop chaud ! il est temps de rafraichir votre intérieur avec une installation de climatisation.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={renovationGenerale}
        />
        <Card.Header>Rénovation Générale</Card.Header>
        <Card.Description>
        Rénovation de votre habitation, piscine, home-wellness, projets haut de gamme, faites confiance à nos rénovateurs reconnus.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={electricien}
        />
        <Card.Header>Electricien</Card.Header>
        <Card.Description>
        Nouvelle installation, mise en conformité, pose de lumimaire, panne de courant ? Nos électriciens sont à votre service.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={carreleur}
        />
        <Card.Header>Carreleur</Card.Header>
        <Card.Description>
        Spécialistes dans la pose de carrelages intérieurs, extérieurs et muraux. Nous mettons nos carreleurs au service de vos idées et de vos envies.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={chauffagiste}
        />
        <Card.Header>Chauffagiste / Sanitariste</Card.Header>
        <Card.Description>
        Installation de chaudières ou de chauffe-eau, rénovation de salles de bains ? Demandez notre chauffagiste spécialisé.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='tiny'
          src={couvreurZingueur}
        />
        <Card.Header>Couvreur / Zingueur</Card.Header>
        <Card.Description>
        Ardoises brisées, toitures endommagées ? nos couvreurs-zingueurs professionnels s'engagent à vous dépanner le plus rapidement possible.
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
  </div>
);

export default Services;
