$(document).on("click", ".hapus", function(){
    var id = $(this).data("id");
    $.ajax({
        url: "hapus_data.php?id=" + id,
        type: "GET",
        success: function(response){
            alert("Data berhasil dihapus.");
            // Refresh tabel atau lakukan tindakan lain sesuai kebutuhan
        },
        error: function(xhr, status, error){
            console.error("Terjadi kesalahan: " + error);
        }
    });
});
