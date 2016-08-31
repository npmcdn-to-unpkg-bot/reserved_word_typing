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

ActiveRecord::Schema.define(version: 20160831031741) do

  create_table "program_lists", force: :cascade do |t|
    t.string "program_name", limit: 20
    t.index ["id"], name: "sqlite_autoindex_program_lists_1", unique: true
  end

  create_table "reserved_words", force: :cascade do |t|
    t.string   "word"
    t.string   "description"
    t.integer  "program_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
