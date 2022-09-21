<template>
    <div class="CreateNew" style="
        display: flex;
        flex-direction: row;
        justify-content: start;
        flex-wrap: wrap;
      ">

        <div style="width: 230px; height: 260px; margin: 5px; border: 2px solid #E2E2E2 " v-for="book in bookListArray"
            :key="book.id">
            <div style="padding-top: 10px;background-color: #dcdcdc;">

                <img src="../assets/BookImage.png" alt="book" width="140" height="150"><br>
            </div>
            <div style="margin-top: -1px; margin-right: 100px;">
                <b>{{book.name}}</b><br>
                by {{book.author}}<br>

                <div class="rating" fxLayoutAlign="space-evenly center">
                    4.5<img class="Star" src="../assets/grade_FILL0_wght400_GRAD0_opsz48.svg"  alt="">
                </div>

                <b> Rs.{{book.price}}</b><br>
                
                <!-- {{book.quantity}} -->
            </div>

        </div>
        

    </div>
    


</template>
<script>


export default {
    name: "DisplayBooks",
    props: ["bookListArray"],

    data() {
        return {
            // id:"",
            showScheduleForm: false,
            pageNumber: 1,
            pageSize: 6,
            // current_page: 1,
            current: 1,
            size: 6,
            // noteInfo: "",
        };
    },
    methods: {
    nextPage() {
      this.pageNumber++;
      this.current_page++;
      this.paginatedData();
    },
    prevPage() {
      this.pageNumber--;
      this.current_page--;
      this.paginatedData();
    },
    paginatedData() {
      console.log("PAGINATED CALLED");
      const start = this.pageNumber * this.size,
        end = start + this.size;
      this.paginated_Data = this.allBooks.slice(start, end);
    },
    // pageCount() {
    //   let length = this.allBooks.length,
    //     size = this.size;
    //   this.page_Count = Math.ceil(length / size);
    //   this.paginatedData();
    // },
    // methods: {
    //   setNotedata(noteObject) {
    //     console.log(noteObject);
    //     this.noteInfo = noteObject;
    //     // this.NotesArray = noteObject.noteObject.notes;
    //     //     console.log(this.NotesArray);

    //   },
    // },
}
}
</script>
<style scoped>
.ft {
    flex-direction: row;
    margin-top: 50px;
}

.CreateNew {
    width: 1000px;
    margin-left: 250px;
    margin-top: 20px;
    gap: 10px;
}

.icone {
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-right: 5px;
}

.Star {
    height: 11px;
    width: 11px;
    font-size: 10px;
    margin-top: -1px;
    background-color: green;
   
}
</style>