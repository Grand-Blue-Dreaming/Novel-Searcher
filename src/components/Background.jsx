import React, { useState } from 'react'
import { styles } from '../styles'
import { BookCanvas } from './canvas'
import SearchResults from './SearchResults'

const Background =  () => 
{
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = async () => 
  {
    fetch("http://localhost:5000/bookSearch", {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        query: searchQuery
      })
    })
    .then((result) => {
      result.json().then((jsonResult) => {
        console.log(jsonResult[searchQuery]);
        setSearchResults(jsonResult[searchQuery])
      });
    }, (reason) => {
        console.log(reason);
    });
    // results = performSearch(searchQuery);
    // setSearchResults(results);
  }

  // const performSearch = (query) =>
  // {

  //   return [
  //     {
  //         "Author": "J. K. Rowling",
  //         "Genre": [
  //             "Fantasy",
  //             "Speculative fiction",
  //             "Young adult literature",
  //             "Fiction"
  //         ],
  //         "Summary": " The book opens on the night before Harry's thirteenth birthday, when he receives gifts by owl post from his friends at school. The next morning at breakfast, Harry sees on television that a man named Black is on the loose from prison. At this time, Aunt Marge comes to stay with the Dursleys, and she insults Harry's parents numerous times. Harry accidentally causes her to inflate, and leaves the Dursley's house and is picked up by the Knight Bus, but only after an alarming sighting of a large, black dog. The Knight Bus drops Harry off at Diagon Alley, where he is greeted by Cornelius Fudge, the Minister of Magic. Harry rents a room and awaits the start of school. In Diagon Alley, Harry finishes his schoolwork, admires a Firebolt broomstick in the window of a shop, and after some time, finds his friends Ron and Hermione. At a pet shop, Hermione buys a cat named Crookshanks, who chases Scabbers, Ron's aging pet rat. Ron is most displeased. The night before they all head off to Hogwarts, Harry overhears Ron's parents discussing the fact that Sirius Black is after Harry. Harry, Ron, Hermione, and the other students board the Hogwarts Express train and are stopped once by an entity called a Dementor. Harry faints and is revived by Professor Lupin, the new Defense Against the Dark Arts teacher. Soon afterward, the students arrive at Hogwarts and classes begin. In Divination class, Professor Trelawney foresees Harry's death by reading tealeaves and finding the representation of a Grim, a large black dog symbolising death. In the Care of Magical Creatures class, Hagrid introduces the students to Hippogriffs, large, deeply dignified crosses between a horse and an eagle. Malfoy insults one of these beasts, Buckbeak, and is attacked. Malfoy drags out the injury in an attempt to have Hagrid fired and Buckbeak put to death. In Defense Against the Dark Arts, Professor Lupin leads the class in a defeat of a Boggart, which changes shape to appear as the viewer's greatest fear. For Ron, a spider, for Neville, professor Snape. For Harry it turns into a dementor During a Hogwarts visit to Hogsmeade, a wizard village which Harry is unable to visit because he has no permission slip, Harry has tea with Professor Lupin. Harry discovers that professor lupin had worried about whether the boggart would take the shape of Voldemort. Snape brings Lupin a steaming potion, which Lupin drinks, much to Harry's alarm. Later that night, Sirius Black breaks into Hogwarts and destroys the Fat Lady portrait that guards Gryffindor Tower. The students spend the night sleeping in the Great Hall while the teachers search the castle. Soon afterwards, Quidditch moves into full swing, and Gryffindor House plays against Hufflepuff. During the game, Harry spies the large black dog, and seconds later he sees a hoard of Dementors. He loses consciousness and falls off his broomstick. Harry wakes to find that his trusty broomstick had flown into the Whomping Willow and been smashed in his fall, and the game itself had lost. Later, Harry learns from Lupin that the Dementors affect Harry so much because Harry's past is so horrible. During the next Hogsmeade visit, from which Harry is forbidden because he didn't get his permission slip signed, Fred and George Weasley give Harry the Marauder's Map, written by the mysterious quartet of Moony, Wormtail, Padfoot, and Prongs. This map leads Harry through a secret passageway into Hogsmeade, where he rejoins Ron and Hermione. Inside the Hogsmeade tavern, Harry overhears professor MC Gonagol ,and some other hogwart's teacher's discussing Sirius Black's responsibility for Harry's parents' deaths, as well as for the death of another Hogwarts student, Peter Pettigrew, who was blown to bits, leaving only a finger. Back at Hogwarts, Harry learns that Hagrid received a notice saying that Buckbeak, the hippogriff who attacked Malfoy, is going to be put on trial, and Hagrid is inconsolable. The winter holidays roll around. For Christmas, Harry receives a Firebolt, the most impressive racing broomstick in the world. Much to his and Ron's dismay, Hermione reports the broomstick to Professor McGonagall, who takes it away, fearing that it may have been sent (and cursed) by Sirius Black. After the holidays, Harry begins working with Professor Lupin to fight Dementors with the Patronus Charm; he is moderately successful, but still not entirely confident in his ability to ward them off. Soon before the game against Ravenclaw, Harry's broomstick is returned to him, and as Ron takes it up to the dormitory, he discovers evidence that Scabbers has been eaten by Crookshanks. Ron is furious at Hermione. Soon afterwards, Gryffindor plays Ravenclaw at Quidditch. Harry, on his Firebolt, triumphs, winning the game. Once all the students have gone to bed, Sirius Black breaks into Harry's dormitory and slashes the curtain around Ron's bed. Several days later, Hagrid invites Harry and Ron over for tea and scolds them for shunning Hermione on account of Scabbers and the Firebolt. They feel slightly guilty, but not terrible. Soon Harry, under his invisibility cloak, meets Ron during a Hogsmeade trip; when he returns, Snape catches him and confiscates his Marauder's Map. Lupin saves Harry from Snape's rage, but afterwards he reprimands him severely for risking his safety for \"a bag of magic tricks.\" As Harry leaves Lupin's office, he runs into Hermione, who informs him that Buckbeak's execution date has been set. Ron, Hermione, and Harry are reconciled in their efforts to help Hagrid. Around this time, Hermione is exceptionally stressed by all of her work, and in a day she slaps Malfoy for picking on Hagrid and she quits Divination, concluding that Professor Trelawney is a great fraud. Days later, Gryffindor beats Slytherin in a dirty game of Quidditch, winning the Quidditch Cup. Exams roll around, and during Harry's pointless Divination exam, Professor Trelawney predicts the return of Voldemort's servant before midnight. Ron, Hermione, and Harry shield themselves in Harry's invisibility cloak and head off to comfort Hagrid before the execution. While at his cabin, Hermione discovers Scabbers in Hagrid's milk jug. They leave, and Buckbeak is executed. As Ron, Harry, and Hermione are leaving Hagrid's house and reeling from the sound of the axe, the large black dog approaches them, pounces on Ron, and drags him under the Whomping Willow. Harry and Hermione and Crookshanks dash down after them; oddly, Crookshanks knows the secret knob to press to still the flailing tree. They move through an underground tunnel and arrive at the Shrieking Shack. They find that the black dog has turned into Sirius Black and is in a room with Ron. Harry, Ron, and Hermione manage to disarm Black, and before Harry can kill Black, avenging his parents' deaths, Professor Lupin enters the room and disarms him. Harry, Ron, and Hermione are aghast as Lupin and Black exchange a series of nods and embrace. Once the three students calm down enough to listen, Lupin and Black explain everything. Lupin is a werewolf who remains tame through a special steaming potion made for him by Snape. While Lupin was a student at Hogwarts, his best friends, James Potter, Sirius Black, and Peter Pettigrew, became Animagi (humans able to take on animal forms) so that they could romp in the grounds with Lupin at the full moon. They explain how Snape once followed Lupin toward his transformation site in a practical joke set up by Sirius, and was rescued narrowly by James Potter. At this moment, Snape reveals himself from underneath Harry's dropped invisibility cloak, but Harry, Ron, and Hermione disarm him, rendering him unconscious. Lupin and Black then explain that the real murderer of Harry's parents is not Black, but Peter Pettigrew, who has been presumed dead but really hidden all these years disguised as Scabbers. Lupin transforms Scabbers into Pettigrew, who squeals and hedges but ultimately confesses, revealing himself to be Voldemort's servant, and Black to be innocent. They all travel back to Hogwarts, but at the sight of the full moon, Lupin, who has forgotten to take his controlling potion (the steaming liquid), turns into a werewolf. Sirius Black responds by turning into the large black dog in order to protect Harry, Ron, and Hermione from Lupin. As Black returns from driving the werewolf into the woods, a swarm of Dementors approaches, and Black is paralyzed with fear. One of the Dementors prepares to suck the soul out of Harry, whose patronus charm is simply not strong enough. Out of somewhere comes a patronus that drives the Dementors away. Harry faints. Harry awakens in the hospital wing to hear Snape and Cornelius Fudge discussing the fact that Sirius Black is about to be given the fatal Dementor's Kiss. Harry and Hermione protest, claiming Black's innocence, but to no avail; then Dumbledore enters the room, shoos out the others, and mysteriously suggests that Harry and Hermione travel back through Hermione's time-turning device, which she has been using from the starting of the school for her studies, and save both Black and Buckbeak. Hermione turns her hour-glass necklace back three turns, and Harry and Hermione are thrust into the past, where they rescue Buckbeak shortly before his execution. From a hiding place in the forest, Harry watches the Dementor sequence and discovers that he had been the one who conjured the patronus, and he is touched and confused to note that his patronus had taken the shape of a stag that he recognises instantly as Prongs, his father's animagi form. After saving his past self from the Dementors, Harry and Hermione fly to the tower where Black is imprisoned, and they rescue Black, sending him away to freedom on Buckbeak's back. The next day, Harry is saddened to learn that Professor Lupin is leaving Hogwarts because of the previous night's scare. Dumbledore meets with Harry and gives him wise fatherly advice on the events that have happened. On the train ride home, Harry receives an owl-post letter from Sirius that contains a Hogsmeade permission letter, words of confirmation that he is safe in hiding with Buckbeak and that he was, in fact, the sender of the Firebolt, and a small pet owl for Ron. Harry feels slightly uplifted as he returns to spend his summer with the Dursleys.",
  //         "Title": "Harry Potter and the Prisoner of Azkaban"
  //     },
  //     {
  //         "Author": "Virginia Woolf",
  //         "Genre": [
  //             "Fiction",
  //             "Non-fiction"
  //         ],
  //         "Summary": " This unusual biography traces the life of Flush from his carefree existence in the country, to his adoption by Ms. Browning and his travails in London, leading up to his final days in a bucolic Italy. Woolf ostensibly uses the life of a dog as pointed social criticism, ranging across topics from feminism and environmentalism to class conflict.",
  //         "Title": "Flush: A Biography"
  //     },
  //     {
  //         "Author": "Michael Connelly",
  //         "Genre": [
  //             "Crime Fiction",
  //             "Mystery",
  //             "Speculative fiction",
  //             "Fiction",
  //             "Suspense"
  //         ],
  //         "Summary": " On New Year\u2019s Day, a dog digs up a bone in Laurel Canyon outside of Los Angeles. The dog\u2019s owner, a doctor, recognizes the bone as human and calls it in to the police. Hieronymus \u201cHarry\u201d Bosch takes on the case together with his colleague Jerry Edgar and after investigating the matter further, a shallow grave containing the bones of a child, is discovered. Bosch can\u2019t let go of the case, a case that brings back memories from his own childhood, and starts an investigation. The only clue that he has to go on is the skateboard found during a search at a suspect's house. The body turns out to have been a 12-year old boy that has been buried 20 years earlier. To solve the murder, Bosch has to dig through records of cases involving disappearances and runaways dating far back in time. In order to try to solve the crime, Bosch has to chase down possible witnesses and suspects from near and far. After 20 years time, a lot of the details once remembered about the disappearance of the boy are blurred and leads Bosch fumbling in the dark. At the same time, a female rookie named Julia Brasher joins the department. Even though Bosch has been warned not to fall for a rookie, he does and this leads to further complications, both inside and outside of the investigation.",
  //         "Title": "City of Bones"
  //     },
  //     {
  //         "Author": "Mark Twain",
  //         "Genre": [
  //             "Short story"
  //         ],
  //         "Summary": " The book is told from the standpoint of a loyal household pet, a dog self described by the first sentence of the story; \"My father was a St. Bernard, my mother was a collie, but I am a Presbyterian.\" The story begins with a description of the dog's life as a puppy and her separation from her mother, which to her was inexplicable. Her puppy and her owner's new child were soon added to her new home. When a fire breaks out in the nursery, the dog risks her life to drag the baby to safety. In the process, her motives are misunderstood and she is cruelly beaten. Soon however, the truth of the situation is discovered and she receives no end of praise. Later in the story, her puppy dies as a result of the owner's biological experiments. Only a servant seems to realize the irony, exclaiming, \"Poor little doggie, you saved HIS child!\" In the end, the dog pines inconsolable over the grave of the puppy with the clear implication that she will do so until death.",
  //         "Title": "A Dog's Tale"
  //     },
  //     {
  //         "Author": "",
  //         "Genre": [
  //             "Children's literature"
  //         ],
  //         "Summary": " The family dog, Harry, disenchanted with taking baths, buries the bathtub scrubber and runs away from home. Harry gets dirty and returns home only to find his family does not recognize him. He attempts to get his family to realize it's him only succeed when he brings back the brush he buried.",
  //         "Title": "Harry the Dirty Dog"
  //     }
  // ]
  // }

  const clearSearch = () =>
  {
    setSearchResults([])
    setSearchQuery('')
  }

  return (
    <section className="relative w-full h-screen mx-auto" style={{ overflow: 'hidden'}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-center gap-5`} style={{ overflow: 'auto', maxHeight: 'calc(100% - 120px)'}}>
        <BookCanvas />
        <h2 className="text-2xl font-bold text-center" style={{marginTop: "-200px"}}>Novel Searcher &nbsp;|&nbsp; A Search Engine for Novels</h2>
        <input
          type="text"
          placeholder="Describe the plot or synopsis of your novel..."
          className="relative px-4 py-2 border border-gray-300 rounded-md"
          style={{width: "550px"}}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="relative bg-gray-900 px-4 py-2 rounded-md ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
        {searchResults.length > 0 && 
          <SearchResults results={searchResults} />
        } 
      </div>
    </section>
  )
}

export default Background