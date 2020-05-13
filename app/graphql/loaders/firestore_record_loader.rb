module Loaders
  class FirestoreRecordLoader < GraphQL::Batch::Loader
    def initialize(klass)
      @klass = klass
    end

    def perform(ids)
      id_docs = ids.map {|id| @klass.col.doc(id) }

      @klass.from_query(@klass.col.where(:__name__, :in, id_docs)).each {|record|
        fulfill(record.id, record)
      }

      ids.each { |id| fulfill(id, nil) unless fulfilled?(id) }
    end
  end
end
