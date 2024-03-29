var DateTime = luxon.DateTime;
const { createApp } = Vue;

createApp({
  data() {
    return {
      currentContact: 0,
      currentMessage: null,
      // lastMessage: 0,
      newMessage: "",
      searchName: "",
      classVisible: false,
      user: {
        name: "Matteo",
        avatar: "./img/img-cv-mat.jpg",
      },

      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "18/09/2023 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "18/09/2023 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "18/09/2023 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "18/09/2023 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "18/09/2023 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "18/09/2023 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "17/09/2023 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "17/09/2023 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "17/09/2023 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "16/09/2023 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "16/09/2023 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "16/09/2023 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "16/09/2023 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "16/09/2023 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "16/09/2023 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "16/09/2023 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "15/09/2023 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "15/09/2023 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "15/09/2023 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "15/09/2023 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "15/09/2023 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeContact(index) {
      this.currentContact = index;
    },

    formatDay(date) {
      let formatHour = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss").toFormat('HH:mm')
      let messageDay = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss").toFormat('dd')
      let selectCurrentday = DateTime.now().toFormat("dd")
      console.log(messageDay, 'sono il giorno del messaggio')
      console.log(selectCurrentday, 'oggi')
      let weekDay = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss", { locale: "it" }).toFormat("cccc");
      console.log(weekDay)

      if (messageDay == selectCurrentday) {
        return formatHour;
      }
      return weekDay;
    },

    formatHour(date) {
      let formatHour = DateTime.fromFormat(date, "dd/MM/yyyy HH:mm:ss").toFormat('HH:mm')

      return formatHour;
    },


    getLastMessage(contact) {
      return (contact.messages[contact.messages.length - 1].message)
    },

    addMessage() {
      const data = {
        date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
        message: this.newMessage,
        status: "sent",
      };
      this.contacts[this.currentContact].messages.push(data);
      this.$nextTick(() => {
        const messagesContainer = this.$refs.scrollContainer;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      });
      this.newMessage = "";
      setTimeout(this.botMessage, 1000);
    },

    botMessage() {
      const data = {
        date: DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss"),
        message: "Certo, ci vediamo dopo:)",
        status: "received",
      };
      this.contacts[this.currentContact].messages.push(data);
      this.$nextTick(() => {
        const messagesContainer = this.$refs.scrollContainer;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      });
    },

    filterName() {
      this.contacts.forEach((contact) => {
        if (
          contact.name
            .toLowerCase()
            .trim()
            .includes(this.searchName.trim().toLowerCase())
        ) {
          return (contact.visible = true);
        }

        return (contact.visible = false);
      });
    },

    showOptions(index) {
      this.currentMessage = index;
      this.classVisible = !this.classVisible;
      console.log(this.classVisible);
    },

    deleteMessage(index) {
      this.contacts[this.currentContact].messages.splice(index, 1);
      this.classVisible = false;
    },
  },
}).mount("#app");
