# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170309084912) do

  create_table "club_images", force: :cascade do |t|
    t.integer  "club_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "image_type"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["club_id"], name: "index_club_images_on_club_id"
  end

  create_table "clubs", force: :cascade do |t|
    t.string   "name"
    t.string   "full_street_address"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.integer  "court_id"
    t.integer  "open"
    t.integer  "close"
    t.boolean  "pool",                default: false
    t.boolean  "gym",                 default: false
    t.boolean  "restaurant",          default: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "id_place"
    t.index ["court_id"], name: "index_clubs_on_court_id"
  end

  create_table "courts", force: :cascade do |t|
    t.string   "sport"
    t.string   "field"
    t.string   "court_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.         "club_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "court_id"
    t.datetime "time_start"
    t.datetime "time_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["court_id"], name: "index_reservations_on_court_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name"
    t.string   "mail"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
