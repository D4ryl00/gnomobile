module github.com/gnolang/gnomobile

go 1.20

require (
	connectrpc.com/connect v1.11.1
	connectrpc.com/grpchealth v1.2.0
	connectrpc.com/grpcreflect v1.2.0
	github.com/gnolang/gno v0.0.0-20230922195728-5a7d005fc14f
	github.com/oklog/run v1.1.0
	github.com/pkg/errors v0.9.1
	github.com/rs/cors v1.10.1
	go.uber.org/multierr v1.11.0
	go.uber.org/zap v1.25.0
	golang.org/x/mobile v0.0.0-20230531173138-3c911d8e3eda
	golang.org/x/net v0.15.0
	golang.org/x/xerrors v0.0.0-20200804184101-5ec99f83aff1
	google.golang.org/grpc v1.50.1
	google.golang.org/protobuf v1.31.0
)

require (
	github.com/btcsuite/btcd v0.22.1 // indirect
	github.com/btcsuite/btcd/btcutil v1.0.0 // indirect
	github.com/cespare/xxhash v1.1.0 // indirect
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/cockroachdb/apd v1.1.0 // indirect
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/dgraph-io/badger/v3 v3.2103.4 // indirect
	github.com/dgraph-io/ristretto v0.1.1 // indirect
	github.com/dustin/go-humanize v1.0.0 // indirect
	github.com/gnolang/goleveldb v0.0.9 // indirect
	github.com/gnolang/overflow v0.0.0-20170615021017-4d914c927216 // indirect
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/golang/glog v1.0.0 // indirect
	github.com/golang/groupcache v0.0.0-20210331224755-41bb18bfe9da // indirect
	github.com/golang/protobuf v1.5.3 // indirect
	github.com/golang/snappy v0.0.4 // indirect
	github.com/google/flatbuffers v1.12.1 // indirect
	github.com/gorilla/websocket v1.5.0 // indirect
	github.com/jmhodges/levigo v1.0.0 // indirect
	github.com/klauspost/compress v1.16.4 // indirect
	github.com/libp2p/go-buffer-pool v0.1.0 // indirect
	github.com/linxGnu/grocksdb v1.8.4 // indirect
	github.com/pelletier/go-toml v1.9.5 // indirect
	github.com/peterbourgon/ff/v3 v3.4.0 // indirect
	github.com/tecbot/gorocksdb v0.0.0-20191217155057-f0fad39f321c // indirect
	go.etcd.io/bbolt v1.3.7 // indirect
	go.opencensus.io v0.24.0 // indirect
	golang.org/x/crypto v0.13.0 // indirect
	golang.org/x/mod v0.13.0 // indirect
	golang.org/x/sync v0.3.0 // indirect
	golang.org/x/sys v0.12.0 // indirect
	golang.org/x/term v0.12.0 // indirect
	golang.org/x/text v0.13.0 // indirect
	golang.org/x/tools v0.13.0 // indirect
	google.golang.org/genproto v0.0.0-20221202195650-67e5cbc046fd // indirect
)

replace (
	github.com/gnolang/gno => github.com/berty/gno v0.0.1 // temporary until PRs merged into upstream, see https://github.com/berty/gno/pull/2
	golang.org/x/mobile => github.com/berty/mobile v0.0.11 // temporary, see https://github.com/golang/mobile/pull/58 and https://github.com/golang/mobile/pull/82
)
